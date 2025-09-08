import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import specializedimg from '../images/special/specialbanner.jpg';

import img2 from '../images/special/crisis.jpg';
import img3 from '../images/special/turnaround.jpg';
import img5 from '../images/special/npa.jpg';
import WhyChooseUs from '../components/whychooseus'

const SpecializedManagement = () => {
const turnaroundServices = [
  
 
  {
    title: "Crisis Cash Flow Management",
    description: "Implementing short-term measures to stabilize cash flow and operations."
  ,image:img2,},
  {
    title: "Strategic Turnaround Planning",
    description: "Designing step-by-step plans to restore profitability and market trust."
  ,image :img3,},
  {
    title: "NPA & Insolvency Advisory",
    description: "Supporting companies in managing non-performing assets and insolvency proceedings."
  ,image:img5,}


];
const reasons = [
  {
    title: "Strategic Guidance in Complexity",
    description: "We support businesses navigating distressed, high-stakes, or unique financial challenges."
  },
  {
    title: "Restructuring Expertise",
    description: "Our experts design restructuring plans to stabilize businesses under stress."
  },
  {
    title: "Capital Access",
    description: "We connect you with special situation investors and funds to secure liquidity."
  },
  
];


  return (
    <>
    <Layout
      title=" Specialized And Turnaround Management"
      bannerImg={specializedimg}
      intro="Financial challenges can arise unexpectedly, and timely intervention is key to recovery and growth."  
description="Our Special Situations & Turnaround services support businesses in distress with independent reviews, debt restructuring, liquidity management, and strategic recovery plans. We work closely with stakeholders to stabilize operations, restore financial health, and unlock opportunities for long-term success."
/> <PhotoGrid items={turnaroundServices} subtitle='Our Specialized Services' />
    <WhyChooseUs items={reasons} heading='Why Choose Us' />
    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Ready To Optimize Your Investment”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Contact Us</b></button>
        </div>
      </section>
    </>
  );
};

export default SpecializedManagement;
