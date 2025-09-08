import React from "react";

// If your images are in /public/images, use strings like "/images/industry.webp"
// If they are inside src/assets, import them, e.g.:
// import heroImg from "../assets/industry.webp";
//
// Below I assume you keep them in /public/images/industries/...
const HERO = "/public/images/industries/industry.webp";

const industries = [
  {
    title: "Professional Services",
    img: "/public/images/industries/box1.jpeg",
    desc: "Specialized solutions for consulting, legal, and advisory firms."
  },
  {
    title: "Audit Firms",
    img: "/public/images/industries/box2.jpg",
    desc: "End-to-end support for statutory, internal and forensic audits."
  },
  {
    title: "GST / VAT Services",
    img: "/public/images/industries/box3.jpg",
    desc: "Compliance, advisory and automation for indirect taxes."
  },
  {
    title: "Compliance Firms",
    img: "/public/images/industries/box4.jpeg",
    desc: "Entity, secretarial and regulatory compliance at scale."
  },
  {
    title: "Corporate Firms",
    img: "/public/images/industries/box5.jpg",
    desc: "Finance, FP&A and controllership for growing enterprises."
  },
  {
    title: "Governance",
    img: "/public/images/industries/box6.webp",
    desc: "Policies, processes and governance frameworks that stick."
  },
  {
    title: "Banking & Financial Institutions",
    img: "/public/images/industries/box7.jpeg",
    desc: "Risk, compliance and reporting for BFSI ecosystems."
  },
  {
    title: "Private Equity & Venture Capital",
    img: "/public/images/industries/box8.jpeg",
    desc: "Deal support, portfolio monitoring and value creation."
  },
  {
    title: "Infrastructure",
    img: "/public/images/industries/box1.png", // you had one card with default bg; point to a real image
    desc: "Financial modeling and program governance for infra projects."
  },
  {
    title: "Information Technology & Services",
    img: "/public/images/industries/box9.jpg",
    desc: "SaaS metrics, revenue recognition and global compliance."
  },
  {
    title: "Hospitality & Healthcare",
    img: "/public/images/industries/box10.jpeg",
    desc: "Unit economics, operations and regulatory hygiene."
  },
  {
    title: "Media & Entertainment",
    img: "/public/images/industries/box11.jpeg",
    desc: "IP, royalties and multi-platform monetization control."
  },
  {
    title: "Non-Governmental Organizations",
    img: "/public/images/industries/box12.png",
    desc: "Grant accounting, donor reporting and audit-readiness."
  },
  {
    title: "Realty Sector",
    img: "/public/images/industries/box14.jpeg",
    desc: "Project cashflows, RERA and capitalization discipline."
  }
];

function IndustryCard({ title, img, desc }) {
  return (
    <article className="industry-card">
      <div
        className="industry-card__image"
        style={{ backgroundImage: `url(${img})` }}
        aria-label={title}
        role="img"
      />
      <div className="industry-card__text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default function Industries() {
  return (
    <main className="industries-page">
      {/* HERO */}
      <section
        className="industries-hero"
        style={{backgroundImage: `url(/images/industries/industry.webp)`}}
      >
        <div className="industries-hero__content">
          <h1>Industries</h1>
          <p>
            At Finance Saarthi, we work across diverse industries, delivering
            tailored solutions that help businesses grow, adapt, and stay
            future-ready. Each industry comes with unique challenges, and our
            expertise ensures that we provide the right strategies to achieve
            sustainable success.
          </p>
        </div>
      </section>

      {/* TITLE */}
      <section className="industries-title">
        <h2>Industries We Serve</h2>
      </section>

      {/* GRID */}
      <section className="industries-grid">
        {industries.map((item) => (
          <IndustryCard key={item.title} {...item} />
        ))}
      </section>

      {/* Optional CTA strip (you can remove if not needed) */}
      {/* <section className="industries-cta">
        <div className="industries-cta__box">
          <h3>Need help deciding the right solution?</h3>
          <button type="button" className="btn-primary">Enquire Now</button>
        </div>
      </section> */}
    </main>
  );
}
