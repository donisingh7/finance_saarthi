import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import Technologyimg from '../images/Technology/banner.jpg';
import img1 from '../images/Technology/digi.jpg';
import img2 from '../images/Technology/cloud.jpg';
import img3 from '../images/Technology/it.jpg';
import img4 from '../images/Technology/fintech.jpg';
import img5 from '../images/Technology/ai.jpg';
// import back from '../images/black bg.jpg'

const TechnologyManagement = () => {
  const technologyServices = [
  {
    title: "Digital Transformation",
    description: "Driving business modernization through digital platforms, automation, and AI solutions.",
    image:img1,
  },
  {
    title: "Cloud Migration & Strategy",
    description: "Helping businesses move to cloud infrastructure with secure and scalable solutions.",
    image:img2
  },
  {
    title: "IT Technology & Controls",
    description: "Designing IT governance frameworks to align with business and regulatory requirements.",
    image:img3
  },
  {
    title: "FinTech & Payments Advisory",
    description: "Guidance on digital banking, blockchain, and next-gen payment solutions.",
    image:img4
  },
  {
    title: "Data Analytics & AI",
    description: "Leveraging advanced analytics and AI to improve business insights and decision-making.",
    image:img5
  }
];

  return (
    <>
    <Layout
      title=" Technology Transformation"
      bannerImg={Technologyimg}
      intro="Technology is the backbone of modern businesses, and effective management is key to driving growth and innovation."  
description="Our Technology Management services help organizations transform their IT landscape by adopting digital strategies, cloud solutions, and automation. From streamlining operations and enhancing cybersecurity to integrating emerging technologies like AI and blockchain, we provide end-to-end guidance that ensures your technology supports long-term business success."
/>  <PhotoGrid items={technologyServices} subtitle='Our Technology Transormation Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Prepared to Safeguard Your Business Against Uncertainty?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Schedule An Initial Consultation</b></button>
        </div>
      </section>
    </>
  );
};

export default  TechnologyManagement;
