import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from '../components/PhotoGrid'
import corpimg from '../images/corporate/banner.jpg';
import img1 from '../images/corporate/cap.jpg';
import img2 from '../images/corporate/work.jpg';
import img3 from '../images/corporate/finan.jpg';
import img4 from '../images/corporate/perf.png';
import img5 from '../images/corporate/strategic.jpg';
import img6 from '../images/corporate/traes.jpg'

const CorporateFinance = () => {
  const corporateFinanceServices = [
  {
    title: "Capital Structuring",
    description: "Advising on the optimal mix of debt and equity to maximize value and reduce financial risks.",
    image: img1,
  },
  {
    title: "Working Capital Optimization",
    description: "Improving liquidity management, cash flow forecasting, and short-term financing strategies.",
    image: img2,
  },
  {
    title: "Financial Restructuring",
    description: "Supporting businesses through turnaround strategies, debt refinancing, and cost optimization.",
    image: img3,
  },
  {
    title: "Performance & Profitability Analysis",
    description: "Identifying cost drivers, revenue opportunities, and efficiency improvements for sustainable growth.",
    image: img4,
  },
  {
    title: "Strategic Growth Advisory",
    description: "Guidance on expansion, diversification, and entering new markets with financial backing.",
    image: img5,
  },
  {
    title: "Treasury & Liquidity Management",
    description: "Designing frameworks to manage foreign exchange, interest rate risks, and liquidity reserves.",
    image: img6,
  },
];

  return (<>
    <Layout
      title="Corporate Finance"
      bannerImg={corpimg}
      intro="Sound financial structuring is the backbone of any successful business. Corporate Finance ensures that organizations optimize capital allocation, manage resources effectively, and drive sustainable growth."  

description="Our Corporate Finance services focus on capital structuring, liquidity management, and financial restructuring to strengthen business performance. From working capital optimization to strategic growth planning, we help organizations unlock value, improve profitability, and achieve long-term stability in an ever-changing economic environment."
 />
    <PhotoGrid items={corporateFinanceServices} subtitle='Our Corporate Finance Services' />

    <section className=" text-center mt-5 p-5 text-white" style={{backgroundColor:'#586670'}}>
        <div className="container w-100   text-center py-3" >
          <h1 className="fw-semibold  py-3">“Prepared to Safeguard Your Business Against Uncertainty?”</h1>
          <button className="btn rounded shadow-lg mt-3 text-dark" style={{backgroundColor:"rgb(255 255 255 / 69%)"}}><b>Schedule An Initial Consultation</b></button>
        </div>
      </section>
      </>
  );
};

export default CorporateFinance;
