import { z } from "zod";

/** Count numeric digits in a phone string (international formats allowed). */
function digitCount(s: string): number {
  return (s.match(/\d/g) ?? []).length;
}

/** Main national number digits (10–15); optional extension suffix "ext …" / "x …". */
function isReasonablePhone(val: string): boolean {
  const trimmed = val.trim();
  const segments = trimmed.split(/\s+(?:ext\.?|x)\s*/i);
  const main = segments[0]?.trim() ?? "";
  const extTail = segments[1];
  if (!/^[\d\s+().\-/]+$/.test(main)) return false;
  const n = digitCount(main);
  if (n < 10 || n > 15) return false;
  if (segments.length > 2) return false;
  if (extTail !== undefined) {
    const extDigits = extTail.replace(/\D/g, "");
    if (extDigits.length < 1 || extDigits.length > 6) return false;
  }
  return true;
}

/**
 * Shared contact payload rules used on both client and server.
 * Server-side parsing is authoritative; the UI mirrors these checks for faster feedback.
 */
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name (at least 2 characters).")
    .max(100, "Name is too long.")
    .regex(/^[\p{L}\p{N}\s.'-]+$/u, "Use letters, numbers, spaces, hyphens, apostrophes, and periods.")
    .refine((val) => /\p{L}/u.test(val), {
      message: "Name must include at least one letter (not digits only).",
    }),

  email: z.string().trim().email("Enter a valid email address.").max(254, "Email is too long."),

  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .max(48, "Phone number is too long.")
    .refine((val) => isReasonablePhone(val), {
      message:
        "Use 10–15 digits on the main line; optional extension like \"ext 101\" or \"x2401\".",
    }),

  companyName: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters.")
    .max(200, "Company name is too long.")
    .regex(/^[\p{L}\p{N}\s&.,'()\-/+]+$/u, "Company name contains invalid characters."),

  requirement: z
    .string()
    .trim()
    .min(5, "Please add a bit more detail (at least 5 characters).")
    .max(5000, "Message is too long."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

/** Strip unexpected keys (e.g. honeypot) before schema parsing on the server. */
export function pickContactFields(body: unknown): unknown {
  if (!body || typeof body !== "object") return {};
  const o = body as Record<string, unknown>;
  return {
    fullName: o.fullName,
    email: o.email,
    phone: o.phone,
    companyName: o.companyName,
    requirement: o.requirement,
  };
}
