import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import sfBanner from "../images/sustainable/banner.jpg";
import img1 from "../images/sustainable/sf1.jpg";
import img2 from "../images/sustainable/sf2.jpg";
import img3 from "../images/sustainable/sf3.jpg";
import img4 from "../images/sustainable/sf4.jpg";
import img5 from "../images/sustainable/sf5.jpg";
// import img6 from "../images/sustainable/sf6.jpg";

const SustainableFinance = () => {
  const sfServices = [
    { title: "Green Bonds", description: "Advising on structuring and issuing bonds for sustainable projects.", image: img1 },
    { title: "Sustainable Investment Funds", description: "Helping investors align portfolios with ESG-focused funds.", image: img2 },
    { title: "Climate Finance", description: "Financing strategies to combat climate change and reduce emissions.", image: img3 },
    { title: "Impact Investing", description: "Designing investments that deliver measurable social/environmental outcomes.", image: img4 },
    { title: "Sustainability-linked Loans", description: "Securing loans tied to sustainability performance targets.", image: img5 },
    // { title: "ESG Risk Integration", description: "Embedding ESG considerations into credit and risk evaluations.", image: img6 },
  ];

  return (
    <>
      <Layout
        title="Sustainable Finance"
        bannerImg={sfBanner}
        intro="Finance can be a powerful force for driving sustainability and positive change."
        description="Our Sustainable Finance services connect capital with environmental and social goals. From structuring green bonds to guiding ESG-driven investments, we help businesses and investors integrate sustainability into financial decision-making."
      />
      <PhotoGrid items={sfServices} subtitle="Our Sustainable Finance Services" />

      <section className="text-center mt-5 p-5 text-white" style={{ backgroundColor: '#586670' }}>
        <div className="container py-3">
          <h1 className="fw-semibold py-3">“Invest in a Greener, Smarter Tomorrow”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{ backgroundColor: "rgb(255 255 255 / 69%)" }}>
            <b>Schedule An Initial Consultation</b>
          </button>
        </div>
      </section>
    </>
  );
};

export default SustainableFinance;
