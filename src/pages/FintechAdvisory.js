import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import finimg from '../images/fintech/banner.jpg';
import img1 from '../images/fintech/digi.jpg';
import img2 from '../images/fintech/block.jpg';
import img3 from '../images/fintech/robo.jpg';
import img4 from '../images/fintech/insur.webp';
import img5 from '../images/fintech/reg.jpg';
import back from '../images/black bg.jpg'

const FintechManagement = () => {
  const fintechServices = [
  {
    title: "Digital Payments & Wallets",
    description: "Advising on mobile wallets, UPI, and digital payment ecosystems for seamless transactions.",
    image: img1,
  },
  {
    title: "Blockchain & Cryptocurrency Solutions",
    description: "Exploring blockchain applications, digital assets, and cryptocurrency regulations.",
    image: img2,
  },
  {
    title: "Robo-Advisory & WealthTech",
    description: "Implementing AI-driven financial advisory platforms for personalized investment solutions.",
    image: img3,
  },
  {
    title: "InsurTech Solutions",
    description: "Leveraging technology to streamline insurance products, claims, and risk assessment.",
    image: img4,
  },
  {
    title: "RegTech & Compliance Automation",
    description: "Helping institutions meet regulatory requirements through advanced compliance technology.",
    image: img5,
  },
];


  return (
    <>
    <Layout
      title=" Fintech Management"
      bannerImg={finimg}
      intro="Financial technology is reshaping how businesses and individuals manage money, invest, and transact."  
description="Our FinTech Advisory services guide you through the adoption of innovative solutions such as digital payments, blockchain, robo-advisory, and AI-driven platforms. We help financial institutions, startups, and enterprises navigate regulatory challenges, integrate emerging technologies, and harness digital transformation for sustainable growth."
/>  <PhotoGrid items={fintechServices} subtitle='Our Core Fintech Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Prepared to Safeguard Your Business Against Uncertainty?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Schedule An Initial Consultation</b></button>
        </div>
      </section>
    </>
  );
};

export default  FintechManagement;
