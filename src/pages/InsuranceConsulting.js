import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import Insuranceimg from '../images/insurance/banner.jpg';
import img1 from '../images/insurance/life.jpg';
import img2 from '../images/insurance/prop.jpg';
import img3 from '../images/insurance/busi.jpg';
import img4 from '../images/insurance/claim.jpg';
import img5 from '../images/insurance/risk.jpg';
// import back from '../images/black bg.jpg'

const InsuranceManagement = () => {
const InsuranceServices = [
  {
    title: "Life & Health Insurance Advisory",
    description: "Helping clients select optimal life and health insurance plans for long-term security.",
    image: img1,
  },
  {
    title: "Property & Liability Coverage",
    description: "Advising on insurance solutions to safeguard assets against damage and liabilities.",
    image: img2,
  },
  {
    title: "Business & Corporate Insurance",
    description: "Designing customized insurance plans for businesses to manage operational risks.",
    image: img3,
  },
  {
    title: "Claims Management Support",
    description: "Assisting in filing, managing, and resolving insurance claims efficiently.",
    image: img4,
  },
  {
    title: "Risk Transfer Strategies",
    description: "Creating insurance-linked risk transfer models to minimize financial exposure.",
    image: img5,
  },
];


  return (
    <>
    <Layout
      title=" Insurance Consulting"
      bannerImg={Insuranceimg}
      intro="Insurance plays a vital role in protecting individuals and businesses against unforeseen Insurances."  
description="Our Insurance Consulting services help you choose, evaluate, and optimize coverage across life, health, property, and business insurance. We provide expert advice on Insurance assessment, policy structuring, and claims management, ensuring you have the right protection at the right cost for every stage."/>
 <PhotoGrid items={InsuranceServices} subtitle='Our Insurance Management Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Ready To Elevate Your Financial Strategy?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Book Your Consultation</b></button>
        </div>
      </section>
    </>
  );
};

export default  InsuranceManagement;

