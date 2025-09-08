import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import auditBanner from "../images/audit/banner.jpg";
import img1 from "../images/audit/financial.jpg";
import img2 from "../images/audit/internal.jpg";
import img3 from "../images/audit/complaince.png";
import img4 from "../images/audit/risk.jpg";
import img5 from "../images/audit/it.jpg";
import img6 from "../images/audit/reporting.jpg";

const AuditAssurance = () => {
  const auditServices = [
    {
      title: "Financial Statement Audit",
      description: "Providing independent verification of financial statements to enhance credibility and transparency.",
      image: img1,
    },
    {
      title: "Internal Audit",
      description: "Evaluating internal controls, risk management, and operational efficiency within the organization.",
      image: img2,
    },
    {
      title: "Compliance Audit",
      description: "Ensuring adherence to regulatory frameworks, industry standards, and statutory obligations.",
      image: img3,
    },
    {
      title: "Risk-Based Audit",
      description: "Identifying potential business risks and designing audit processes that mitigate exposure.",
      image: img4,
    },
    {
      title: "IT & Systems Audit",
      description: "Assessing technology systems, cybersecurity practices, and data integrity for organizations.",
      image: img5,
    },
    {
      title: "Reporting & Assurance",
      description: "Delivering actionable insights and comprehensive audit reports for stakeholders and regulators.",
      image: img6,
    },
  ];

  return (
    <>
      <Layout
        title="Audit & Assurance"
        bannerImg={auditBanner}
        intro="Trust and accountability are critical for any organization’s long-term credibility. Audit & Assurance services build confidence among stakeholders by validating financial and operational practices."
        description="Our Audit & Assurance solutions provide independent evaluations of financial statements, internal processes, and compliance frameworks. From statutory audits to risk-based assessments, we help organizations strengthen governance, improve transparency, and ensure long-term sustainability."
      />

      <PhotoGrid items={auditServices} subtitle="Our Audit & Assurance Services" />

      <section className="text-center mt-5 p-5 text-white" style={{ backgroundColor: '#586670' }}>
        <div className="container w-100 text-center py-3">
          <h1 className="fw-semibold py-3">“Building Trust Through Transparency & Integrity”</h1>
          <button
            className="btn rounded shadow-lg mt-3 text-dark"
            style={{ backgroundColor: "rgb(255 255 255 / 69%)" }}
          >
            <b>Get Your Consultation Now</b>
          </button>
        </div>
      </section>
    </>
  );
};

export default AuditAssurance;
