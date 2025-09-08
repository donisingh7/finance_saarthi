import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import fraudBanner from "../images/fraud/banner.jpg";
import img1 from "../images/fraud/fraud1.jpg";
import img2 from "../images/fraud/fraud2.jpg";
import img3 from "../images/fraud/fraud3.jpg";
import img4 from "../images/fraud/fraud4.jpg";
import img5 from "../images/fraud/fraud5.jpg";
import img6 from "../images/fraud/fraud6.jpg";
import WhyChooseUs from '../components/whychooseus'

const FraudInvestigations = () => {
  const fraudServices = [
    { title: "Forensic Accounting", description: "Tracing financial irregularities and identifying fraud patterns.", image: img1 },
    { title: "Corporate Investigations", description: "Uncovering misconduct, insider threats, and unethical practices.", image: img2 },
    { title: "Anti-Money Laundering (AML)", description: "Ensuring compliance with AML regulations and detecting suspicious activity.", image: img3 },
    { title: "Whistleblower Support", description: "Providing secure frameworks for employee disclosures.", image: img4 },
    { title: "Digital Forensics", description: "Recovering and analyzing digital evidence for investigations.", image: img5 },
    { title: "Litigation Support", description: "Assisting with expert testimony and evidence in court proceedings.", image: img6 },
  ];
  const reasons = [
  {
    title: "Investigative Excellence",
    description: "Our forensic experts specialize in uncovering fraud, misconduct, and financial irregularities."
  },
  {
    title: "Advanced Forensic Tools",
    description: "We use data analytics and digital forensics to detect hidden risks and irregular patterns."
  },
  {
    title: "Independent & Objective",
    description: "We provide unbiased insights and reports that stand up to scrutiny in legal and regulatory forums."
  },
  
];


  return (
    <>
      <Layout
        title="Fraud & Investigations"
        bannerImg={fraudBanner}
        intro="Fraud can disrupt trust, reputation, and financial stability. Detecting it early is critical."
        description="Our Fraud & Investigation services use forensic techniques, digital tools, and compliance frameworks to uncover fraud, reduce risks, and ensure justice. We help organizations protect assets, strengthen internal controls, and respond effectively to incidents."
      />
      <PhotoGrid items={fraudServices} subtitle="Our Fraud & Investigation Services" />
 <WhyChooseUs items={reasons} heading='Why Choose Us' />
      <section className="text-center mt-5 p-5 text-white" style={{ backgroundColor: '#586670' }}>
        <div className="container py-3">
          <h1 className="fw-semibold py-3">“Are You Ready to Protect Your Business”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{ backgroundColor: "rgb(255 255 255 / 69%)" }}>
            <b>Get Your Consultation Now</b>
          </button>
        </div>
      </section>
    </>
  );
};

export default FraudInvestigations;
