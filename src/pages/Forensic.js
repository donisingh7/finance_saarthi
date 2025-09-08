import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import forenimg from '../images/forensic/banner.jpg';
import img1 from '../images/forensic/digi.jpg';
import img2 from '../images/forensic/data.jpg';
import img3 from '../images/forensic/cyber.jpg';
import img4 from '../images/forensic/regula.jpg';
// import img5 from '../images/forensic/business.webp';
// import back from '../images/black bg.jpg'

const ForensicManagement = () => {
  const forensicServices = [
  {
    title: "Digital Evidence Collection",
    description: "Using advanced tools to gather and preserve electronic evidence securely.",
    image:img1
  },
  {
    title: "Data Analytics & Pattern Detection",
    description: "Applying analytics to uncover fraud, anomalies, and suspicious activity.",
    image:img2,
  },
  {
    title: "Cyber Forensics",
    description: "Investigating cybercrimes such as hacking, data theft, and insider breaches.",
    image:img3
  },
  {
    title: "Regulatory & Compliance Verification",
    description: "Leveraging technology to validate adherence to financial and regulatory standards.",
    image:img4
  }
];


  return (
    <>
    <Layout
      title=" Forensic Management"
      bannerImg={forenimg}
      intro="In today’s digital world, evidence and insights are often hidden within complex data and technology systems."  
description="Our Forensic Technology services help organizations uncover, preserve, and analyze digital evidence to address fraud, disputes, and regulatory investigations. Using advanced tools in data forensics, e-discovery, and cyber investigations, we provide clarity, strengthen compliance, and support legal proceedings with precision and integrity."
/>
<PhotoGrid items={forensicServices} subtitle='Our Forensic Management Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Ready to Uncover the Truth with Data-Driven Precision?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Schedule An Initial Consultation</b></button>
        </div>
      </section>
    </>
  );
};

export default  ForensicManagement;
