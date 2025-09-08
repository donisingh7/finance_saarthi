import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import actBanner from "../images/actuarial/banner.jpg";
import img1 from "../images/actuarial/act1.jpg";
// import img2 from "../images/actuarial/act2.jpg";
import img3 from "../images/actuarial/act3.jpg";
import img4 from "../images/actuarial/act4.jpg";
import img5 from "../images/actuarial/act5.jpg";
import img6 from "../images/actuarial/act6.jpg";

const ActuarialServices = () => {
  const actServices = [
    { title: "Insurance Pricing & Reserving", description: "Calculating premiums, reserves, and liabilities for insurers.", image: img1 },
    // { title: "Pension & Retirement Plans", description: "Designing and valuing pension schemes and employee benefits.", image: img2 },
    { title: "Risk Modeling", description: "Quantitative models to measure and predict financial risks.", image: img3 },
    { title: "Capital & Solvency Assessment", description: "Ensuring compliance with solvency regulations and capital adequacy.", image: img4 },
    { title: "Actuarial Valuations", description: "Independent valuations of assets, liabilities, and financial positions.", image: img5 },
    { title: "Regulatory Reporting", description: "Supporting compliance with actuarial disclosure and regulatory requirements.", image: img6 },
  ];

  return (
    <>
      <Layout
        title="Actuarial Services"
        bannerImg={actBanner}
        intro="Data-driven financial forecasting is essential to manage uncertainty and plan ahead."
        description="Our Actuarial Services leverage statistical models and financial expertise to assess risks, design insurance and pension schemes, and ensure long-term financial health. We support insurers, corporates, and regulators with reliable, future-focused insights."
      />
      <PhotoGrid items={actServices} subtitle="Our Actuarial Services" />

      <section className="text-center mt-5 p-5 text-white" style={{ backgroundColor: '#586670' }}>
        <div className="container py-3">
          <h1 className="fw-semibold py-3">“Ready To Start Transforming Numbers into Strategic Advantage?”</h1>
          
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{ backgroundColor: "rgb(255 255 255 / 69%)" }}>
            <b>Schedule An Consultation Now</b>
          </button>
        </div>
      </section>
    </>
  );
};

export default ActuarialServices;
