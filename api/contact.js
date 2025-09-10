// ESM serverless function for Vercel
import nodemailer from "nodemailer";

// Robust body parser (JSON + x-www-form-urlencoded)
async function readBody(req) {
  if (req.body && typeof req.body !== "string") return req.body;
  let raw = "";
  for await (const chunk of req) raw += chunk;
  const ct = (req.headers["content-type"] || "").toLowerCase();
  try {
    if (ct.includes("application/json")) return JSON.parse(raw || "{}");
    if (ct.includes("application/x-www-form-urlencoded")) return Object.fromEntries(new URLSearchParams(raw));
  } catch (_) {}
  return {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const body = await readBody(req);
  const name    = (body.name || "").trim();
  const email   = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const mailSubject = subject || `New message from ${name}`;

  // Recipients from env
  const TO = (process.env.EMAIL_TO || process.env.CONTACT_TO || process.env.EMAIL_USER || "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  if (TO.length === 0) {
    return res.status(500).json({ error: "Server misconfig: set EMAIL_TO in Vercel" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT || 465),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Gmail/App password
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    // Gmail: "from" should match the authenticated user
    from: `"Finance Saarthi" <${process.env.EMAIL_USER}>`,
    to: TO,
    replyTo: email,               // so replies go to the visitor
    subject: mailSubject,
    text:
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${mailSubject}\n\n` +
      `Message:\n${message}`,
    html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Subject:</b> ${mailSubject}</p>
      <p><b>Message:</b></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return res.status(200).json({ ok: true, message: "Message sent" });
}
