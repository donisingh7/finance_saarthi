import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import img from '../images/M&A/banner.jpg';
import img1 from '../images/M&A/target.jpg';
import img2 from '../images/M&A/due.jpg';
// import img3 from '../images/M&A /cyber.jpg';
// import img4 from '../images/M&A /reputation.png';
import img5 from '../images/M&A/post.jpg';
import WhyChooseUs from '../components/whychooseus'

const MAManagement = () => {
  const MAServices = [
  {
    title: "Target Identification & Screening",
    description: "Identifying potential acquisition or merger opportunities aligned with strategic goals.",
    image: img1,
  },
  {
    title: "Due Diligence Support",
    description: "Conducting comprehensive financial, operational, and legal due diligence to minimize risks.",
    image: img2,
  },

  {
    title: "Post-Merger Integration",
    description: "Supporting cultural, operational, and financial integration for long-term success.",
    image: img5,
  },
];
const reasons = [
  {
    title: "Proven Deal Expertise",
    description: "We have guided numerous successful mergers, acquisitions, and divestitures across industries."
  },
  {
    title: "End-to-End Transaction Support",
    description: "From target identification to post-merger integration, we provide comprehensive advisory services."
  },
  {
    title: "Value Maximization",
    description: "Our strategies focus on unlocking synergies and maximizing shareholder value."
  },
  {
    title: "Strong Negotiation Skills",
    description: "We leverage industry insights to secure favorable terms for our clients."
  },
  {
    title: "Confidential & Ethical Approach",
    description: "We ensure discretion, compliance, and ethical practices throughout the deal lifecycle."
  },
  {
    title: "Global Network Access",
    description: "Our wide network of investors, corporates, and institutions connects you with the right opportunities."
  },
];


  return (
    <>
    <Layout
      title=" Merger And Aquisites Management"
      bannerImg={img}
      intro="Successful mergers and acquisitions require more than numbers — they demand strategy, foresight, and precision."  
description="Our M&A Advisory services guide you through every stage of a transaction, from identifying opportunities and conducting due diligence to valuation, negotiation, and integration. We help businesses unlock growth, expand into new markets, and maximize shareholder value with strategic and seamless deal execution."
/>  <PhotoGrid items={MAServices} subtitle='Our M&A  Management Services' />
 <WhyChooseUs items={reasons} heading='Why Choose Us' />
    
    </>
  );
};

export default  MAManagement;
