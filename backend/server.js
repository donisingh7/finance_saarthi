// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (lock to your site in production)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);

// --- Health check
app.get("/health", (_req, res) => res.json({ ok: true, service: "finance-saarthi-api" }));

// --- Mail transporter (change host/port if you use another SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT || 465),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // sender email (SMTP user)
    pass: process.env.EMAIL_PASS, // SMTP app password
  },
});

// --- Contact endpoint (fields: name, email, subject, message)
app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Email to Finance Saarthi inbox
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
        <hr/>
        <p style="font-size:12px;color:#888">Submitted via Finance Saarthi website</p>
      `,
    });

    // (Optional) Auto-acknowledgement to user
    if (process.env.SEND_ACK === "true") {
      await transporter.sendMail({
        from: `"Finance Saarthi" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We’ve received your message",
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting <strong>Finance Saarthi</strong>. Our team will get back to you shortly.</p>
          <p><em>Your message:</em></p>
          <blockquote>${String(message).replace(/\n/g, "<br/>")}</blockquote>
          <p>Best regards,<br/>Finance Saarthi Team</p>
        `,
      });
    }

    res.json({ ok: true, message: "Thank you! Your message has been sent." });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Failed to send contact email" });
  }
});

// --- Start
app.listen(PORT, () => {
  console.log(`🚀 Finance Saarthi API running at http://localhost:${PORT}`);
});
