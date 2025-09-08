import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import Cybersecurityimg from '../images/cyber/banner.jpg';
import img1 from '../images/cyber/threats.png';
import img2 from '../images/cyber/network.jpg';
import img3 from '../images/cyber/incident.jpg';
import img4 from '../images/cyber/complaince.jpg';
import img5 from '../images/cyber/empl.jpg';
// import back from '../images/black bg.jpg'

const CybersecurityManagement = () => {
const cybersecurityServices = [
  {
    title: "Threat & Vulnerability Assessment",
    description: "Identifying weaknesses in IT infrastructure and preventing potential cyber threats.",
    image: img1,
  },
  {
    title: "Network & Data Protection",
    description: "Securing sensitive information with advanced encryption and monitoring solutions.",
    image: img2,
  },
  {
    title: "Incident Response & Recovery",
    description: "Developing rapid response frameworks to minimize damage from cyberattacks.",
    image: img3,
  },
  {
    title: "Compliance & Cybersecurity Management",
    description: "Ensuring cybersecurity strategies meet global regulatory and compliance standards.",
    image: img4,
  },
  {
    title: "Employee Training & Awareness",
    description: "Building resilience through workforce education on cybersecurity best practices.",
    image: img5,
  },
];


  return (
    <>
    <Layout
      title=" Cybersecurity Management"
      bannerImg={Cybersecurityimg}
     intro="In a digital-first world, protecting sensitive data and systems is critical to building trust and resilience."  
description="Our Cybersecurity services provide comprehensive strategies to safeguard your business from cyber threats, data breaches, and evolving Cybersecuritys. From Cybersecurity assessments and security architecture to incident response and compliance, we help you strengthen defenses and ensure business continuity in an ever-changing threat landscape."
/> <PhotoGrid items={cybersecurityServices} subtitle='Our Cybersecurity Management Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Prepared to Safeguard Your Business Against Uncertainty?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Schedule An Initial Consultation</b></button>
        </div>
      </section>
    </>
  );
};

export default  CybersecurityManagement;
