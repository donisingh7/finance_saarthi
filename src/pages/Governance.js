import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import grcBanner from "../images/grc/banner.jpg";
import img1 from "../images/grc/grc1.jpg";
// import img2 from "../images/grc/grc2.jpg";
import img3 from "../images/grc/grc2.png";
import img4 from "../images/grc/grc3.jpg";
import img5 from "../images/grc/grc4.webp";
import img6 from "../images/grc/grc5.jpg";

const GRC = () => {
  const grcServices = [
    { title: "Corporate Governance Frameworks", description: "Designing governance structures for accountability and efficiency.", image: img1 },
    // { title: "Enterprise Risk Management", description: "Building systems to assess, monitor, and mitigate business risks.", image: img2 },
    { title: "Compliance Frameworks", description: "Aligning business processes with global regulatory standards.", image: img3 },
    { title: "Risk Analytics", description: "Using data-driven models to identify and manage high-impact risks.", image: img4 },
    { title: "Policy & Control Development", description: "Defining internal policies, procedures, and risk controls.", image: img5 },
    { title: "Integrated GRC Solutions", description: "Implementing digital GRC platforms for seamless governance.", image: img6 },
  ];

  return (
    <>
      <Layout
        title="Governance, Risk & Compliance (GRC)"
        bannerImg={grcBanner}
        intro="Strong governance and risk frameworks build resilient organizations that inspire stakeholder trust."
        description="Our GRC services integrate governance, risk, and compliance to create holistic frameworks. We empower organizations to proactively manage risks, improve transparency, and meet global regulatory expectations."
      />
      <PhotoGrid items={grcServices} subtitle="Our Soecialized GRC Services" />

      <section className="text-center mt-5 p-5 text-white" style={{ backgroundColor: '#586670' }}>
        <div className="container py-3">
          <h1 className="fw-semibold py-3">“Stronger Governance, Lower Risk, Greater Trust”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{ backgroundColor: "rgb(255 255 255 / 69%)" }}>
            <b>Schedule An Initial Consultation</b>
          </button>
        </div>
      </section>
    </>
  );
};

export default GRC;
