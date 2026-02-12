import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const TO_EMAIL = "praveen@prnit.com";
// Email: local part @ domain with TLD at least 2 letters
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MIN_NAME_LENGTH = 2;
const MIN_REQUIREMENT_LENGTH = 10;
const PHONE_DIGITS_MIN = 7;
const PHONE_DIGITS_MAX = 15;

function countLetters(s: string): number {
  return (s.match(/[a-zA-Z]/g) ?? []).length;
}

function validateContactBody(body: unknown): { error?: string } {
  if (!body || typeof body !== "object") return { error: "Invalid request body." };
  const b = body as Record<string, unknown>;
  const fullName = String(b.fullName ?? "").trim();
  const email = String(b.email ?? "").trim();
  const phoneRaw = String(b.phone ?? "").trim();
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  const companyName = String(b.companyName ?? "").trim();
  const requirement = String(b.requirement ?? "").trim();

  if (fullName.length < MIN_NAME_LENGTH)
    return { error: "Please enter your full name (at least 2 characters)." };
  if (countLetters(fullName) < 2)
    return { error: "Full name must contain at least 2 letters." };
  if (/[0-9]/.test(fullName) && countLetters(fullName) < fullName.replace(/\s/g, "").length / 2)
    return { error: "Full name should be mostly letters, not numbers." };
  if (!email) return { error: "Please enter your email address." };
  if (!EMAIL_REGEX.test(email))
    return { error: "Please enter a valid email address (e.g. name@company.com)." };
  const emailLocal = email.split("@")[0] ?? "";
  if (/^[0-9]/.test(emailLocal))
    return { error: "Email should start with a letter (e.g. name@company.com)." };
  if (/[a-zA-Z]/.test(phoneRaw))
    return { error: "Phone number should contain only digits (and optional spaces or dashes)." };
  if (phoneDigits.length < PHONE_DIGITS_MIN || phoneDigits.length > PHONE_DIGITS_MAX)
    return { error: "Please enter a valid phone number (7–15 digits)." };
  if (companyName.length < MIN_NAME_LENGTH)
    return { error: "Please enter your company name (at least 2 characters)." };
  if (!/\s/.test(companyName))
    return { error: "Please enter your full company name (e.g. at least two words like Acme Corp)." };
  if (countLetters(companyName) < 2)
    return { error: "Company name must contain at least 2 letters." };
  if (/[0-9]/.test(companyName) && countLetters(companyName) < companyName.replace(/\s/g, "").length / 2)
    return { error: "Company name should be mostly letters, not numbers." };
  if (requirement.length < MIN_REQUIREMENT_LENGTH)
    return { error: "Please describe your requirement (at least 10 characters)." };
  if (!/[a-zA-Z]/.test(requirement))
    return { error: "Please describe your requirement in words, not only numbers." };

  return {};
}

export async function POST(request: Request) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("EMAIL_USER or EMAIL_PASS is not set in environment variables");
      return NextResponse.json(
        { error: "Email service is not configured. Please add EMAIL_USER and EMAIL_PASS to your .env.local" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const validation = validateContactBody(body);
    if (validation.error) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { fullName, email, phone, companyName, requirement } = body as {
      fullName: string;
      email: string;
      phone: string;
      companyName: string;
      requirement: string;
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${fullName || "—"}</p>
      <p><strong>Email:</strong> ${email || "—"}</p>
      <p><strong>Phone Number:</strong> ${phone || "—"}</p>
      <p><strong>Company Name:</strong> ${companyName || "—"}</p>
      <p><strong>Requirement:</strong></p>
      <p>${requirement?.replace(/\n/g, "<br>") || "—"}</p>
      <hr>
      <p><em>Sent from PRNIT contact form</em></p>
    `;

    await transporter.sendMail({
      from: `"PRNIT Contact" <${emailUser}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${fullName}`,
      html,
    });

    const thankYouHtml = `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #1F4FD8;">Thank you for reaching out!</h2>
        <p>Hi ${fullName},</p>
        <p>We have received your message and appreciate you getting in touch with us.</p>
        <p>Our team will review your requirement and get back to you soon.</p>
        <p>Best regards,<br><strong>PRNIT Team</strong></p>
      </div>
    `;

    await transporter.sendMail({
      from: `"PRNIT" <${emailUser}>`,
      to: email,
      subject: "Thank you for contacting PRNIT – we'll be in touch soon",
      html: thankYouHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
