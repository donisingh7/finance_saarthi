import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // CORS preflight (optional)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // Validate required fields for your form
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, subject and message are required" });
    }

    // SMTP transport (Gmail example; works with any SMTP)
    const transporter = nodemailer.createTransport({
      host: (process.env.SMTP_HOST || "smtp.gmail.com").trim(),
      port: Number((process.env.SMTP_PORT || "465").trim()),
      secure: String(process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: (process.env.EMAIL_USER || "").trim(),
        pass: (process.env.EMAIL_PASS || "").trim(),
      },
    });

    // Email to Finance Saarthi inbox
    await transporter.sendMail({
      from: `"Finance Saarthi Website" <${(process.env.FROM_EMAIL || process.env.EMAIL_USER).trim()}>`,
      to: (process.env.TO_EMAIL || process.env.EMAIL_USER).trim(),
      replyTo: email, // replies go to the visitor
      subject: `Contact • ${subject} — ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject}\n\n` +
        `Message:\n${message}`,
      html: `
        <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p style="font-size:12px;color:#888">Submitted via Finance Saarthi website</p>
      `,
    });

    // Optional: auto-acknowledgement to the user
    if (String(process.env.SEND_ACK || "true") === "true") {
      await transporter.sendMail({
        from: `"Finance Saarthi" <${(process.env.FROM_EMAIL || process.env.EMAIL_USER).trim()}>`,
        to: email,
        subject: "We’ve received your message",
        html: `
          <p>Hi ${name},</p>
          <p>Thanks for reaching out to <strong>Finance Saarthi</strong>. We’ve received your message and will get back to you shortly.</p>
          <p><em>Your message:</em></p>
          <blockquote>${String(message).replace(/\n/g, "<br/>")}</blockquote>
          <p>Best regards,<br/>Finance Saarthi Team</p>
        `,
      });
    }

    return res.status(200).json({ ok: true, message: "Thank you! Your message has been sent." });
  } catch (err) {
    console.error("CONTACT error:", err);
    return res.status(500).json({ error: "Email send failed" });
  }
}
