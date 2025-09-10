import React from "react";
import Layout from "../components/ServicesLayout";
import retireimg from '../images/retire/retirebanner3.jpg'
import bridge from '../images/retire/bridge12.jpg';
import img1 from "../images/retire/img11.jpg";
import img2 from "../images/retire/img2.jpg";
import img3 from "../images/retire/img3.jpg";
import img4 from "../images/retire/img4.png";
import img5 from "../images/retire/img5.jpg";
import img6 from "../images/retire/img6.jpg";
import PhotoGrid from '../components/PhotoGrid';
import { Link } from 'react-router-dom';

const RetirementPlanning = () => {
  const retirementServices = [
  {
    title: "Retirement Corpus Building",
    description: "Helping you calculate and accumulate the ideal retirement fund needed to sustain your future lifestyle.",
    image: img1,
  },
  {
    title: "Longevity & Inflation Planning",
    description: "Designing strategies to ensure your money lasts throughout retirement while staying ahead of inflation.",
    image: img2,
  },
  {
    title: "Social Security & Pension Optimization",
    description: "Advising on how to maximize benefits from government or employer-sponsored pension schemes.",
    image: img3,
  },
  {
    title: "Phased Withdrawal Strategies",
    description: "Structuring systematic withdrawal plans to balance steady income with long-term asset growth.",
    image: img4,
  },
  {
    title: "Healthcare & Assisted Living Support",
    description: "Planning ahead for medical care, nursing homes, or assisted living expenses in later years.",
    image: img5,
  },
  {
    title: "Lifestyle & Post-Retirement Goals",
    description: "Ensuring retirement aligns with personal goals such as travel, hobbies, philanthropy, or family commitments.",
    image: img6,
  },
];


  return (
    <>
    <Layout
      title="RetirementPlanning"
      bannerImg={retireimg}
      intro='"Retirement is not the end of earning — it’s the beginning of living from what you’ve built."'
       description=" Our Retirement Planning services ensure you have the financial independence to enjoy life without worrying about income security.
        We evaluate your current financial standing, estimate future expenses, and design strategies to build a retirement corpus through investments, pensions, and tax-efficient savings."
      // subtitle=" Comprehensive Retirement Solutions"
      // items={taxServices}
    />
    <PhotoGrid items={retirementServices} subtitle="Comprehensive Retirement Solution"/>
   
    
    {/* <section className="position-relative text-center mt-5 text-white">
        <img
          src={bridge}
          alt='bridge'
          className="w-100 img-fluid"
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
      </section> */}
    </>
  );
};

export default RetirementPlanning;
