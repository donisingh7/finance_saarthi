import React from "react";
import Layout from "../components/ServicesLayout";
import PhotoGrid from "../components/PhotoGrid";
import loanimg from '../images/loan1.jpg';
import img1 from '../images/loan/home.jpg';
import img2 from '../images/loan/business.jpg';
import img3 from '../images/loan/dept.jpg';
import img4 from '../images/loan/educ.jpg';
import img5 from '../images/loan/refinan.jpg';
import img6 from '../images/loan/credit.jpg';

const LoanAdvisory = () => {
  const loanServices = [
  {
    title: "Home & Mortgage Loans",
    description: "Guidance in securing housing loans with favorable interest rates and repayment plans.",
    image: img1
  },
  {
    title: "Business & Working Capital Loans",
    description: "Advisory on raising structured finance solutions for business growth and operations.",
    image: img2,
  },
  {
    title: "Debt Restructuring",
    description: "Helping individuals and corporates restructure existing debt for better terms.",
  image: img3,
},
  {
    title: "Education & Personal Loans",
    description: "Solutions for education funding and personal financing needs with smart repayment strategies.",
    image: img4,
  },
  {
    title:'Loan Refinancing & Consolidation',
    description: 'We help you restructure existing loans by consolidating multiple debts into a single manageable repayment plan.',
    image: img5,
  },
  {
    title:'Personal Loan & Credit Advisory',
    description:'From choosing the right personal loan to improving your credit profile, we guide you in securing financing tailored to your needs. ',
    image: img6,
  }

];

  return (
    <>
    <Layout
      title="LoanAdvisory"
      bannerImg={loanimg}
      intro='"Accessing the right financing can unlock growth and stability in your financial journey."'
         description=" Our Loan Advisory services guide you in selecting suitable loan products — whether for housing, business expansion, education, or working capital.
          We evaluate interest rates, repayment options, creditworthiness, and lender reliability to design the most cost-effective borrowing strategy."
    />
    <PhotoGrid items={loanServices} subtitle='Our Core Loan Advisory Services' />
    </>
  );
};

export default LoanAdvisory;
