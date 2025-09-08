import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import valuaimg from '../images/valuation/valuation banner.jpg';
import img1 from '../images/risk/erm.jpg';
import img2 from '../images/valuation/asset.jpg';
import img3 from '../images/valuation/fair.jpg';
import img4 from '../images/valuation/regu.jpg';
import img5 from '../images/risk/business.webp';
import back from '../images/black bg.jpg'

const Valuation = () => {
  const valuationServices = [
  
  {
    title: "Asset & Share Valuation",
    description: "Valuing tangible and intangible assets including real estate, IP, and equity shares.",
    image:img2,
  },
  {
    title: "Fairness Opinions",
    description: "Providing independent assessments of transaction fairness for boards and investors.",
    image:img3,
  },
  {
    title: "Regulatory Valuations",
    description: "Conducting valuations in compliance with tax and regulatory requirements.",
    image:img4,
  }
];

    return (
    <>
    <Layout
      title="Valuation Management"
      bannerImg={valuaimg}
      intro="Understanding the true value of your assets is the foundation of informed decision-making in business and investments."
      description="Our Valuation Services provide accurate and reliable assessments of businesses, assets, and financial instruments. Whether for mergers, acquisitions, fundraising, compliance, or strategic planning, we deliver insights that help you negotiate with confidence, meet regulatory standards, and unlock long-term value."
      /> 
      <PhotoGrid items={valuationServices} subtitle='Our specialized Valuation Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">
“Ready to Discover the True Worth of Your Business?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Schedule An Initial Consultation</b></button>
        </div>
      </section>
    </>
  );
};

export default  Valuation;
