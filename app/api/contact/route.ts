import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { isContactHoneypotTripped } from "@/lib/contact/honeypot";
import {
  enforceContactRateLimit,
  getClientIp,
  maskIpForLog,
} from "@/lib/contact/rate-limit";
import { escapeHtml } from "@/lib/contact/sanitize";
import { contactFormSchema, pickContactFields } from "@/lib/contact/validation";

export async function POST(request: Request) {
  /**
   * Order of checks:
   * 1) Parse JSON — required before honeypot / validation.
   * 2) Honeypot — bots only; responds like success without counting toward rate limits or SMTP (cheap).
   * 3) Rate limit / IP block — protects expensive validation + email path (see lib/contact/rate-limit.ts).
   * 4) Zod validation — shared with ContactSection (authoritative rules).
   * 5) Send mail — HTML fields escaped against injection.
   */

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const ip = getClientIp(request);

  if (isContactHoneypotTripped(body)) {
    if (process.env.CONTACT_LOG_CONTACT_EVENTS === "true") {
      console.warn(`[contact-honeypot] submission_discarded ip=${maskIpForLog(ip)}`);
    }
    return NextResponse.json({ success: true });
  }

  const limited = enforceContactRateLimit(ip);
  if (!limited.ok) {
    const headers = new Headers();
    if (limited.retryAfterSec !== undefined) {
      headers.set("Retry-After", String(limited.retryAfterSec));
    }
    return NextResponse.json({ error: limited.message }, { status: limited.httpStatus, headers });
  }

  const parsed = contactFormSchema.safeParse(pickContactFields(body));
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return NextResponse.json(
      {
        error: "Please correct the highlighted fields.",
        fieldErrors: flat.fieldErrors,
      },
      { status: 400 }
    );
  }

  const { fullName, email, phone, companyName, requirement } = parsed.data;

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim();

  if (!emailUser || !emailPass) {
    console.error("EMAIL_USER or EMAIL_PASS is not set in environment variables");
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please add EMAIL_USER and EMAIL_PASS to your .env.local",
      },
      { status: 500 }
    );
  }

  if (!contactToEmail) {
    console.error("CONTACT_TO_EMAIL is not set in environment variables");
    return NextResponse.json(
      {
        error:
          "Contact inbox is not configured. Please add CONTACT_TO_EMAIL to your environment.",
      },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone Number:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Company Name:</strong> ${escapeHtml(companyName)}</p>
      <p><strong>Requirement:</strong></p>
      <p>${escapeHtml(requirement).replace(/\n/g, "<br>")}</p>
      <hr>
      <p><em>Sent from PRNIT contact form</em></p>
    `;

    await transporter.sendMail({
      from: `"PRNIT Contact" <${emailUser}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `Contact Form: ${fullName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
