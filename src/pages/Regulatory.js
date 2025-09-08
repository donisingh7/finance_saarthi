import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import regBanner from "../images/regulatory/banner.jpg";
import img1 from "../images/regulatory/regu.jpg";
import img2 from "../images/regulatory/policy.jpg";
import img3 from "../images/regulatory/complaince.jpg";
import img4 from "../images/regulatory/risk.jpg";
import img5 from "../images/regulatory/cross.jpg";
import img6 from "../images/regulatory/training.jpg";

const RegulatoryCompliance = () => {
  const regServices = [
    { title: "Regulatory Advisory", description: "Guidance on evolving financial regulations and industry compliance.", image: img1 },
    { title: "Policy Implementation", description: "Designing and implementing policies aligned with legal frameworks.", image: img2 },
    { title: "Compliance Monitoring", description: "Regular audits and assessments to ensure compliance with laws.", image: img3 },
    { title: "Risk & Compliance Reporting", description: "Comprehensive reporting frameworks for regulators and boards.", image: img4 },
    { title: "Cross-Border Compliance", description: "Advising on multi-jurisdictional regulatory obligations.", image: img5 },
    { title: "Training & Awareness", description: "Employee training programs on compliance best practices.", image: img6 },
  ];

  return (
    <>
      <Layout
        title="Regulatory Compliance"
        bannerImg={regBanner}
        intro="Compliance is not just a legal necessity—it is a foundation for sustainable business growth."
        description="Our Regulatory Compliance services help organizations navigate complex legal landscapes with confidence. From monitoring regulatory changes to cross-border compliance, we enable businesses to minimize risks, avoid penalties, and build a culture of accountability."
      />
      <PhotoGrid items={regServices} subtitle="Our Regulatory Compliance Services" />

      <section className="text-center mt-5 p-5 text-white" style={{ backgroundColor: '#586670' }}>
        <div className="container py-3">
          <h1 className="fw-semibold py-3">“Stay Ahead of Regulations, Stay Ahead in Business”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{ backgroundColor: "rgb(255 255 255 / 69%)" }}>
            <b> Get Your Consultation Now</b>
          </button>
        </div>
      </section>
    </>
  );
};

export default RegulatoryCompliance;
