import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields (name, email, message)." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.SMTP_USER ||
      "prince.sharma@krmangalam.edu.in";

    if (!smtpUser || !smtpPass) {
      console.error(
        "[Contact API] SMTP credentials missing. Please set SMTP_USER and SMTP_PASS in .env.local"
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Mail service is not configured yet. Please configure SMTP_USER and SMTP_PASS in .env.local",
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter (Office 365 / Microsoft Exchange)
    const smtpHost = process.env.SMTP_HOST || "smtp.office365.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    // Port 587 = STARTTLS (secure: false, requireTLS: true)
    // Port 465 = SSL/TLS   (secure: true)
    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      requireTLS: !isSecure, // enforce STARTTLS upgrade on port 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false, // allows self-signed certs on some Exchange servers
      },
    });

    const emailSubject = subject?.trim()
      ? `[IDEAS 4.0 Contact] ${subject.trim()}`
      : `[IDEAS 4.0 Contact] New inquiry from ${name}`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #213C87 0%, #0062A2 100%); color: #ffffff; padding: 28px 24px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.85; }
    .content { padding: 24px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; font-weight: 500; }
    .message-box { background: #f1f5f9; border-left: 4px solid #213C87; padding: 14px 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #334155; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>IDEAS 4.0 Contact Submission</h1>
      <p>K.R. Mangalam University Innovation Portal</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Sender Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}" style="color: #0062A2; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${subject || "N/A"}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      This email was sent from the IDEAS 4.0 contact form at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST.
    </div>
  </div>
</body>
</html>
    `;

    const textContent = `
IDEAS 4.0 - New Contact Form Submission
---------------------------------------
Sender Name: ${name}
Email: ${email}
Subject: ${subject || "N/A"}

Message:
${message}

---------------------------------------
Sent at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
    `.trim();

    await transporter.sendMail({
      from: `"IDEAS 4.0 Portal" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
