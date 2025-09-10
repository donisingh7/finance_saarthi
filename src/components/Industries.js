import React from "react";
import box1 from "../images/industries/box1.jpeg";
import box2 from "../images/industries/box2.jpg";
import box3 from "../images/industries/box3.jpg";
import box4 from "../images/industries/box4.jpeg";
import box5 from "../images/industries/box5.jpg";
import box6 from "../images/industries/box6.webp";
import box7 from "../images/industries/box7.jpeg";
import box8 from "../images/industries/box8.jpeg";
import box01 from "../images/industries/box01.png";
import box9 from "../images/industries/box9.jpg";
import box10 from "../images/industries/box10.jpeg";
import box11 from "../images/industries/box11.jpeg";
import box12 from "../images/industries/box12.png";
import box13 from "../images/industries/box13.jpeg";
import box14 from "../images/industries/box14.jpeg";

const features = [
  { title: "Professional Services", img: box1 },
  { title: "Audit Firms", img: box2 },
  { title: "GST/VAT Services", img: box3 },
  { title: "Compliance Firms", img: box4 },
  { title: "Corporate Firms", img: box5 },
  { title: "Governance", img: box6 },
  { title: "Banking & Financial Institutions", img: box7 },
  { title: "Private Equity & Venture Capitalist", img: box8 },
  { title: "Infrastructure", img: box01 }, 
  { title: "Information Technology & Services", img: box9 },
  { title: "Hospitality & Healthcare", img: box10 },
  { title: "Media & Entertainment", img: box11 },
  { title: "Charity", img: box12 },
  { title: "Non-Governmental Organisations", img: box13 },
  { title: "Realty Sector", img: box14 },
];


export default function Industries() {
  return (
    <main className="industries-page">
      {/* Hero */}
      <section className="tech-bg">
        <div className="content">
          <h1>Industries</h1>
          <p className="hero-sub">
            At Finance Saarthi, we work across diverse industries, delivering tailored
            solutions that help businesses grow, adapt, and stay future-ready. Each
            industry comes with unique challenges, and our expertise ensures we
            provide the right strategies to achieve sustainable success.
          </p>
        </div>
      </section>

      {/* Section Title */}
      <section className="title-outer">
        <h1>Industries We Serve</h1>
      </section>

      {/* Grid */}
      <div className="grid-container-industries">
      {features.map((item, index) => (
        <div className="grid-item-industries" key={index}>
          <img src={item.img} alt={item.title} />
          <div className="content-industries">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </main>
  );
}
