import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import riskimg from '../images/risk/riskmanagemnt1.jpg';
import img1 from '../images/risk/erm.jpg';
import img2 from '../images/risk/finan.jpg';
import img3 from '../images/risk/cyber.jpg';
import img4 from '../images/risk/reputation.png';
import img5 from '../images/risk/business.webp';
// import back from '../images/black bg.jpg'

const RiskManagement = () => {
  const riskServices = [
  {
    title: "Enterprise Risk Management",
    description: "Identifying, assessing, and mitigating risks across the organization.",
    image: img1,
  },
  {
    title: "Financial Risk Management",
    description: "Managing exposure to market, credit, and liquidity risks.",
    image: img2,
  },
  {
    title: "Cybersecurity Risk",
    description: "Protecting data, networks, and systems from evolving cyber threats.",
    image: img3,
  },
  
  {
    title: "Reputation & Brand Risk",
    description: "Safeguarding brand trust and minimizing reputational damage.",
    image: img4,
  },
  {
    title: "Business Continuity Planning",
    description: "Developing crisis management and disaster recovery frameworks.",
    image: img5,
  },
];

  return (
    <>
    <Layout
      title=" RiskManagement"
      bannerImg={riskimg}
      intro="Uncertainty is a part of every financial journey, and effective risk management is essential to long-term success."
         description=" Our Risk Management services identify, assess, and mitigate potential threats to your financial well-being.
          From market volatility and regulatory changes to credit and operational risks, we provide strategies that safeguard your investments and business operations."/>
    <PhotoGrid items={riskServices} subtitle='Our Risk Management Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Prepared to Safeguard Your Business Against Uncertainty?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Schedule An Initial Consultation</b></button>
        </div>
      </section>
    </>
  );
};

export default  RiskManagement;
