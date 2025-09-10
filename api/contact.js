import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT || 465),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail to your inbox
    await transporter.sendMail({
      from: `"Finance Saarthi Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Contact • ${subject} — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ ok: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
