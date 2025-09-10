import React from "react";
import Layout from "../components/ServicesLayout";
import wealthimg from '../images/wealth/wealthmanagement.webp'
import ApproachLayout from "../components/Approach";
import { FaChartPie, FaBullseye, FaProjectDiagram, FaSyncAlt } from "react-icons/fa";
import PhotoGrid from "../components/PhotoGrid";
import aproachImg from '../images/wealth/wealth management approac.jpeg'
import img1 from '../images/wealth/port1.jpg';
import img2 from '../images/wealth/estate.jpg';
import img3 from '../images/wealth/wealth.jpg';
import img4 from '../images/wealth/global.jpg'
import img5 from '../images/wealth/philan.jpg';


const WealthManagement = () => {
  const wealthServices = [
  {
    title: "Portfolio Management",
    description: "Customized portfolio strategies designed to balance risk and maximize returns.",
    image: img1,
  },
  {
    title: "Estate & Legacy Planning",
    description: "Helping you preserve and transfer wealth across generations effectively.",
    image: img2,
  },
  {
    title: "Wealth Protection",
    description: "Strategies to safeguard assets against inflation, taxes, and market risks.",
    image: img3,
  },

  {
    title: "Global Wealth Advisory",
    description: "Advisory for cross-border investments and multi-country asset management.",
    image: img4,
  },
  {
    title: "Philanthropy Planning",
    description: "Structuring charitable giving to maximize social impact and tax benefits.",
    image: img5,
  },
];


  const wealthSteps = [
    {
      title: "Financial Health Check",
      description: "We start with a complete review of your assets, liabilities, and financial goals.",
      icon: <FaChartPie />
    },
    {
      title: "Goal-Oriented Planning",
      description: "We define clear wealth milestones and align them with your lifestyle and aspirations.",
      icon: <FaBullseye />
    },
    {
      title: "Tailored Wealth Strategy",
      description: "We build a customized investment and savings roadmap balancing growth and protection.",
      icon: <FaProjectDiagram />
    },
    {
      title: "Continuous Optimization",
      description: "Your portfolio is monitored and rebalanced regularly to adapt to life and market changes.",
      icon: <FaSyncAlt />
    }
  ];

  


  return (
    <>
    <Layout
      title="Wealth Management"
      bannerImg={wealthimg}
      intro="We design tailored strategies to grow, manage, and protect your wealth across all stages of life."
      description="Our approach combines deep market insights, data-driven analysis, and personalized advisory to help you make informed financial decisions.
      Whether you are planning for long-term growth, risk mitigation, or retirement, we provide solutions aligned with your unique goals."
    />
    <PhotoGrid items={wealthServices}  subtitle='Our Wealth Management Services'/>
    <ApproachLayout
      title="Our Approach to Wealth Management"
      intro="We believe wealth management is more than just growing assets — it’s about creating a sustainable strategy that adapts to your lifestyle, goals, and legacy."
      steps={wealthSteps}
      image={aproachImg}
    />
    </>
  );
};

export default WealthManagement;
