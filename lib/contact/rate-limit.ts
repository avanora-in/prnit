/**
 * Contact form abuse protection (in-memory, per Node process).
 *
 * How it works:
 * 1) Client IP is derived only when we trust forwarding headers:
 *    - CONTACT_TRUST_PROXY=true (your reverse proxy overwrites/forwards safely), or
 *    - VERCEL=1 (Vercel sets x-forwarded-for / cf-connecting-ip at the edge).
 *    Otherwise we key everyone as "unknown" so arbitrary clients cannot spoof x-forwarded-for.
 *    Behind nginx/HAProxy yourself: enable CONTACT_TRUST_PROXY after you strip client spoof attempts.
 *    Header order when trusted: cf-connecting-ip (Cloudflare), then first x-forwarded-for hop, then x-real-ip.
 *
 * 2) Rolling 1-second window: timestamps of attempts in the last 1000 ms. If the count reaches
 *    CONTACT_MAX_ATTEMPTS_PER_SECOND (default 3), HTTP 429 and a "rate violation" are recorded.
 *
 * 3) Burst: CONTACT_BURST_BLOCK_THRESHOLD or more attempts in one second → temporary IP block.
 *
 * 4) Repeated abuse: CONTACT_VIOLATIONS_FOR_BLOCK violations within CONTACT_VIOLATIONS_WINDOW_MS
 *    → longer random block between CONTACT_BLOCK_MIN_MS and CONTACT_BLOCK_MAX_MS.
 *
 * 5) Blocks use `blockedUntil` (epoch ms); after expiry the IP starts clean.
 *
 * Limitations: state lives in this Node process only (lost on restart; not shared across instances).
 * For multi-region / autoscaling at serious scale, move counters to Redis (or similar).
 *
 * Observability: set CONTACT_LOG_CONTACT_EVENTS=true to emit masked IP lines for denies (no full PII in logs).
 */

type IpRecord = {
  /** All POST attempt timestamps (ms) within the last 1s, used for per-second and burst checks. */
  attemptsInLastSecond: number[];
  /** Timestamps when this IP received a 429 due to the per-second cap (pruned by violations window). */
  rateLimitViolationAt: number[];
  /** If set and in the future, all requests from this IP are rejected until this instant. */
  blockedUntil?: number;
};

function maxAttemptsPerSecond(): number {
  const n = Number(process.env.CONTACT_MAX_ATTEMPTS_PER_SECOND);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 3;
}

function burstThreshold(): number {
  const n = Number(process.env.CONTACT_BURST_BLOCK_THRESHOLD);
  return Number.isFinite(n) && n >= 2 ? Math.floor(n) : 15;
}

function violationsWindowMs(): number {
  const n = Number(process.env.CONTACT_VIOLATIONS_WINDOW_MS);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 10 * 60 * 1000;
}

function violationsForBlock(): number {
  const n = Number(process.env.CONTACT_VIOLATIONS_FOR_BLOCK);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 5;
}

function blockDurationMs(): number {
  const min = Number(process.env.CONTACT_BLOCK_MIN_MS);
  const max = Number(process.env.CONTACT_BLOCK_MAX_MS);
  const lo = Number.isFinite(min) && min > 0 ? min : 20 * 60 * 1000;
  const hi = Number.isFinite(max) && max >= lo ? max : 25 * 60 * 1000;
  return Math.floor(lo + Math.random() * (hi - lo || 1));
}

const storeKey = "__prnitContactRateLimitStore";

function getStore(): Map<string, IpRecord> {
  const g = globalThis as typeof globalThis & { [storeKey]?: Map<string, IpRecord> };
  if (!g[storeKey]) g[storeKey] = new Map();
  return g[storeKey];
}

function shouldLogContactEvents(): boolean {
  return process.env.CONTACT_LOG_CONTACT_EVENTS === "true";
}

/** Partially mask IPv4/IPv6 for logs (monitoring without storing full addresses). */
export function maskIpForLog(ip: string): string {
  if (ip === "unknown") return ip;
  if (ip.includes(".")) {
    const parts = ip.split(".");
    if (parts.length === 4) return `${parts[0]}.${parts[1]}.*.*`;
  }
  if (ip.includes(":")) {
    const parts = ip.split(":");
    return `${parts[0] ?? "?"}:***`;
  }
  return "[opaque]";
}

function logContactRateEvent(event: string, ip: string, detail?: string): void {
  if (!shouldLogContactEvents()) return;
  console.warn(`[contact-rate] ${event} ip=${maskIpForLog(ip)}${detail ? ` ${detail}` : ""}`);
}

/**
 * Trust X-Forwarded-For / X-Real-Ip / CF-Connecting-IP only when the platform or operator says it is safe.
 * Spoofing is possible if you enable trust without a reverse proxy that replaces these headers.
 */
export function trustForwardedIpHeaders(): boolean {
  if (process.env.CONTACT_TRUST_PROXY === "true") return true;
  if (process.env.CONTACT_TRUST_PROXY === "false") return false;
  return process.env.VERCEL === "1";
}

export function getClientIp(request: Request): string {
  if (!trustForwardedIpHeaders()) {
    return "unknown";
  }
  const cf = request.headers.get("cf-connecting-ip")?.trim();
  if (cf) return cf;
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real;
  return "unknown";
}

export type RateLimitResult =
  | { ok: true }
  | { ok: false; httpStatus: 403 | 429; message: string; retryAfterSec?: number };

/**
 * Call at the start of POST /api/contact before reading the body.
 * Enforces temporary IP blocks and per-second / burst / violation-based blocking.
 */
export function enforceContactRateLimit(ip: string, now = Date.now()): RateLimitResult {
  const store = getStore();
  let rec = store.get(ip);
  if (!rec) {
    rec = { attemptsInLastSecond: [], rateLimitViolationAt: [] };
    store.set(ip, rec);
  }

  if (rec.blockedUntil !== undefined && now < rec.blockedUntil) {
    logContactRateEvent("blocked_active", ip);
    const retryAfterSec = Math.ceil((rec.blockedUntil - now) / 1000);
    return {
      ok: false,
      httpStatus: 403,
      message:
        "Too many attempts from this address. Please try again later.",
      retryAfterSec,
    };
  }
  if (rec.blockedUntil !== undefined && now >= rec.blockedUntil) {
    rec.blockedUntil = undefined;
    rec.attemptsInLastSecond = [];
    rec.rateLimitViolationAt = [];
  }

  const windowMs = 1000;
  const maxPerSec = maxAttemptsPerSecond();
  const burst = burstThreshold();
  const violWindow = violationsWindowMs();
  const violNeed = violationsForBlock();

  rec.attemptsInLastSecond = rec.attemptsInLastSecond.filter((t) => now - t < windowMs);
  rec.rateLimitViolationAt = rec.rateLimitViolationAt.filter((t) => now - t < violWindow);

  if (rec.attemptsInLastSecond.length >= burst) {
    rec.blockedUntil = now + blockDurationMs();
    rec.attemptsInLastSecond.push(now);
    logContactRateEvent("burst_block", ip, `threshold=${burst}`);
    return {
      ok: false,
      httpStatus: 429,
      message: "Too many requests. Please try again later.",
      retryAfterSec: Math.ceil((rec.blockedUntil - now) / 1000),
    };
  }

  if (rec.attemptsInLastSecond.length >= maxPerSec) {
    rec.rateLimitViolationAt.push(now);
    rec.attemptsInLastSecond.push(now);
    if (rec.rateLimitViolationAt.length >= violNeed) {
      rec.blockedUntil = now + blockDurationMs();
      logContactRateEvent("violations_block", ip, `violations=${violNeed}`);
      return {
        ok: false,
        httpStatus: 403,
        message:
          "Too many attempts from this address. Please try again later.",
        retryAfterSec: Math.ceil(((rec.blockedUntil ?? now) - now) / 1000),
      };
    }
    logContactRateEvent("rate_cap", ip, `maxPerSec=${maxPerSec}`);
    return {
      ok: false,
      httpStatus: 429,
      message: "Too many submissions. Please wait a moment and try again.",
      retryAfterSec: 1,
    };
  }

  rec.attemptsInLastSecond.push(now);
  return { ok: true };
}
