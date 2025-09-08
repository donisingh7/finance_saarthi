import React from "react";
import Layout from "../components/ServicesLayout";
import WhyChooseUs from '../components/whychooseus';
import taximg from '../images/tax/taxplanning.jpeg';
import PhotoGrid from '../components/PhotoGrid'

import img1 from "../images/tax/transac.jpg";
import img2 from "../images/tax/planning.jpg";
import img3 from "../images/tax/aacounting.jpg";
import img4 from "../images/tax/controversy.jpg";
import img5 from "../images/tax/digital.jpg";
import img6 from "../images/tax/finance operate.jpg";
import ApproachLayout from "../components/Approach";
import { FaFileInvoiceDollar, FaBalanceScale, FaLightbulb, FaClipboardCheck } from "react-icons/fa";
import img from '../images/Selection.jpg'


const taxServices = [
  {
    title: "Transaction Tax",
    description: "Helping you manage M&A, restructuring, and transaction-related taxes.",
    image: img1,
  },
  {
    title: "Income Tax Planning",
    description: "Designing efficient tax strategies to minimize liabilities and risks.",
    image: img2,
  },
  {
    title: "Tax Accounting",
    description: "Comprehensive accounting for tax provisions, reporting, and compliance.",
    image: img3,
  },
  {
    title: "Managing Tax Controversy",
    description: "Support during audits, disputes, and litigation with tax authorities.",
    image: img4,
  },
  {
    title: "Digital Tax Strategy",
    description: "Leveraging technology and data to improve tax efficiency.",
    image: img5,
  },
  
  {
    title: "Tax and Finance Operate",
    description: "Transforming your tax and finance function for the future.",
    image: img6,
  },
];
  const reasons = [
    {
      title: "Expert Professionals",
      description:
        "Our team brings years of experience and in-depth knowledge in finance and consulting services.",
    },
    {
      title: "Tailored Solutions",
      description:
        "We provide customized strategies designed to meet your specific financial goals.",
    },
    {
      title: "Trust & Transparency",
      description:
        "Clear communication and ethical practices build long-term relationships with our clients.",
    },
    {
      title: "Technology Driven",
      description:
        "We leverage the latest tools and technology to offer smarter and faster solutions.",
    },
    {
      title: "End-to-End Support",
      description:
        "From planning to execution, we stand with you through every step of the journey.",
    },
    {
      title: "Global Perspective",
      description:
        "We bring global insights and best practices to help you thrive in competitive markets.",
    },
  ];
  const taxSteps = [
    {
      title: "Comprehensive Tax Review",
      description: "Analyzing your current tax structure, income sources, and existing liabilities to identify opportunities for savings.",
      icon: <FaFileInvoiceDollar />
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring accurate and timely filings, adherence to government regulations, and minimizing the risk of penalties.",
      icon: <FaClipboardCheck />
    },
    {
      title: "Strategic Tax Planning",
      description: "Designing tailored strategies to optimize tax efficiency, reduce liabilities, and align with business or personal goals.",
      icon: <FaLightbulb />
    },
    {
      title: "Risk & Dispute Management",
      description: "Providing support in audits, managing tax controversies, and ensuring strong documentation for future security.",
      icon: <FaBalanceScale />
    }
  ];


const TaxPlanning = () => {
  return (
    <>
    <Layout
      title="Tax Planning"
      bannerImg={taximg}
      intro="Our tax professionals offer services across all tax disciplines to help you thrive in this era of rapid change."
      description="Our globally coordinated tax professionals offer connected services across all tax disciplines to help you thrive in an era of rapid change. We combine our exceptional knowledge and experience with the people and technology platforms that make us an ideal partner for your tax-related needs. EY has competencies in business tax, international tax, transaction tax and tax-related issues associated with people, compliance and reporting. We invite you to leverage our experience, knowledge and business insights to help you succeed."
      
      
    />
    <PhotoGrid items={taxServices} subtitle=" Our Specialized Tax Management Services" />
    <ApproachLayout
    title="Our Approach to Manage Your Tax"
      intro="We believe wealth management is more than just growing assets — it’s about creating a sustainable strategy that adapts to your lifestyle, goals, and legacy."
      steps={taxSteps}
      image={img}/>
    <WhyChooseUs items={reasons} heading='Why Choose Us' />
    
    
    </>
  );
};

export default TaxPlanning;






