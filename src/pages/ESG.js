import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import esgBanner from "../images/esg/banner.jpg";
import img1 from "../images/esg/esg1.jpg";
import img2 from "../images/esg/esg2.png";
import img3 from "../images/esg/esg3.jpg";
import img4 from "../images/esg/esg4.png";
import img5 from "../images/esg/esg5.png";
import img6 from "../images/esg/esg6.jpg";

const ESGAdvisory = () => {
  const esgServices = [
    { title: "ESG Strategy Development", description: "Creating tailored ESG strategies aligned with your corporate vision.", image: img1 },
    { title: "Sustainability Reporting", description: "Complying with global reporting frameworks like GRI, SASB, and TCFD.", image: img2 },
    { title: "Carbon Footprint Assessment", description: "Measuring and managing emissions to meet climate goals.", image: img3 },
    { title: "Stakeholder Engagement", description: "Building trust through transparent ESG communication.", image: img4 },
    { title: "Supply Chain Sustainability", description: "Ensuring ethical sourcing and responsible supplier practices.", image: img5 },
    { title: "ESG Risk & Governance", description: "Embedding ESG in governance and risk frameworks.", image: img6 },
  ];

  return (
    <>
      <Layout
        title="ESG & Sustainability Advisory"
        bannerImg={esgBanner}
        intro="Sustainability is no longer optional—it is integral to long-term success."
        description="Our ESG Advisory services help organizations embrace sustainability by integrating environmental, social, and governance practices into their strategies. We enable businesses to unlock new opportunities, attract investors, and build resilient, future-ready enterprises."
      />
      <PhotoGrid items={esgServices} subtitle="Our ESG & Sustainability Services" />

      <section className="text-center mt-5 p-5 text-white" style={{ backgroundColor: '#586670' }}>
        <div className="container py-3">
          <h1 className="fw-semibold py-3">“Future-Proof Your Business with ESG Excellence”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{ backgroundColor: "rgb(255 255 255 / 69%)" }}>
            <b>Schedule An Initial Consultation</b>
          </button>
        </div>
      </section>
    </>
  );
};

export default ESGAdvisory;
