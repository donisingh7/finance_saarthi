import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Parse body (JSON or x-www-form-urlencoded)
  let body = req.body;
  if (!body || typeof body === "string") {
    let raw = "";
    for await (const chunk of req) raw += chunk;
    const ct = (req.headers["content-type"] || "").toLowerCase();
    try {
      if (ct.includes("application/json")) body = JSON.parse(raw || "{}");
      else if (ct.includes("application/x-www-form-urlencoded")) body = Object.fromEntries(new URLSearchParams(raw));
      else body = {};
    } catch { body = {}; }
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();
  if (!name || !email || !message) return res.status(400).json({ error: "Missing required fields" });
  const mailSubject = subject || `New message from ${name}`;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT || 465),
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  await transporter.sendMail({
    from: `"Finance Saarthi" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.CONTACT_TO,
    subject: mailSubject,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${mailSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return res.status(200).json({ ok: true, message: "Message sent successfully" });
}
