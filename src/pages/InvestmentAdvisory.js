import React from "react";
import Layout from "../components/ServicesLayout";
import investimg from '../images/invest/investment.jpeg'
import PhotoGrid from "../components/PhotoGrid";
import img2 from '../images/invest/debt.jpg';
import img1 from '../images/invest/equity.jpg';
import img3 from '../images/invest/mutual.jpg';
import img4 from '../images/invest/alter.jpg';
import img5 from '../images/invest/sustain.jpg';
import img6 from '../images/invest/global.jpg';

const InvestmentAdvisory = () => {
  const investmentServices = [
  {
    title: "Equity Advisory",
    description: "Guidance on investing in stocks, IPOs, and equity-linked products.",
    image: img1,
  },
  {
    title: "Debt & Fixed Income",
    description: "Safe and reliable investment options in bonds, debentures, and deposits.",
    image: img2,
  },
  {
    title: "Mutual Funds & ETFs",
    description: "Building diversified portfolios using mutual funds and exchange-traded funds.",
    image: img3,
  },
  {
    title: "Alternative Investments",
    description: "Advisory on hedge funds, private equity, and venture capital opportunities.",
    image: img4,
  },
  
  {
    title: "Sustainable Investing",
    description: "Aligning investments with ESG (Environmental, Social, Governance) principles.",
    image: img5,
  },
  {
    title: "Global Investment Strategy",
    description: "Expanding wealth across international markets and currencies.",
    image: img6,
  },
];

  return (
    <>
    <Layout
      title="Investment Advisory"
      bannerImg = {investimg}
      description='Our Investment Advisory service focuses on building diversified portfolios that balance growth opportunities with risk management.
We analyze global markets, identify emerging investment trends, and align them with your personal goals to ensure sustainable wealth creation.
Whether you are a first-time investor or managing a complex portfolio, our experts provide guidance on asset allocation, equity and debt instruments, mutual funds, and alternative investments.'/>
    <PhotoGrid items={investmentServices} subtitle="Our Core Investment Advisory Services"/>
    </>
  );
};

export default InvestmentAdvisory;
