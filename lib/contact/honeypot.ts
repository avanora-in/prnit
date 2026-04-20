/**
 * Honeypot field `companyWebsiteHp`: hidden from users; bots often fill every input.
 * When non-empty we treat the submission as automated and skip email + rate-limit accounting
 * while returning the same JSON shape as success so simple bots do not adapt immediately.
 */

export const CONTACT_HONEYPOT_FIELD = "companyWebsiteHp" as const;

export function isContactHoneypotTripped(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const raw = (body as Record<string, unknown>)[CONTACT_HONEYPOT_FIELD];
  return typeof raw === "string" && raw.trim().length > 0;
}
