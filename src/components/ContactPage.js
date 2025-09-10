import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const CONTACT_HERO_PUBLIC = "/images/contact/Contact-us.jpg";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending…");

    try {
      // API URL from .env.local
      const API_URL = process.env.REACT_APP_API_URL;
      if (!API_URL) throw new Error("API URL not found in environment variables.");

      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed");

      setStatus(data.message || "Thanks! Your message has been sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("CONTACT ERROR:", err);
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="contact-container">
      {/* Hero / Header */}
      <header
        className="contact-hero"
        style={{
          backgroundImage: `url(${CONTACT_HERO_PUBLIC})`,
        }}
      >
        <h1 className="contact-hero__title">Contact Us</h1>
      </header>

      {/* Map + Details */}
      <section className="map-and-details">
        <div className="map-wrap">
          <iframe
            title="Finance Saarthi Advisory Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111982.9310845751!2d76.99798424335937!3d28.705598600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a89e218acf%3A0xe36744cfc5a8f3c1!2sFINANCE%20SAARTHI%20ADVISORY!5e0!3m2!1sen!2sin!4v1756534183866!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="contact-details">
          <h3 className="contact-details__title">Contact Details</h3>
          <ul className="contact-details__list">
            <li>
              <FaMapMarkerAlt className="contact-details__icon" />
              2nd Floor, Vardhman Arihant Bhawan, 201, Plot No. 25, Block KP,
              Comm. Complex, Pitampura, Delhi, 110034
            </li>
            <li>
              <FaPhoneAlt className="contact-details__icon" />
              +91 9672777506
            </li>
            <li>
              <FaEnvelope className="contact-details__icon" />
              team.financesaarthi@gmail.com
            </li>
          </ul>

          <div className="contact-details__social">
            <a href="https://www.facebook.com/profile.php?id=61579922421871" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://x.com/FinanceSaarthi" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/finance-saarthi-advisory-96089b37a" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/financesaarthi?igsh=MXUxaWVwNDJ6Mm15aA==" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2 className="section-title">Send us a message</h2>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input id="email" name="email" value={form.email} onChange={handleChange} type="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" value={form.subject} onChange={handleChange} type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {status && <div className="form-status">{status}</div>}
      </section>
    </main>
  );
}
