import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const TO_EMAIL = "praveen@prnit.com";

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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const body = await request.json();
    const { fullName, email, phone, companyName, requirement } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 }
      );
    }

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
