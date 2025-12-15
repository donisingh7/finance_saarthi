import React from "react";
import {   Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
import WealthManagement from "../pages/WealthManagement";
import TaxPlanning from "../pages/TaxManagement";
import RiskManagement from "../pages/RiskManagement";
import RetirementPlanning from "../pages/RetirementPlanning";
import LoanAdvisory from "../pages/LoanAdvisory";
import InvestmentAdvisory from "../pages/InvestmentAdvisory";
import InsuranceConsulting from "../pages/InsuranceConsulting";
import CorporateFinance from "../pages/CorporateFinance";
import SpecialPlanning from '../pages/Specialized';
import ForensicPlanning from '../pages/Forensic';
import Fintech from '../pages/FintechAdvisory';
import Governance from '../pages/Governance';
import MA from '../pages/M&A-Advisory';
import Cyber from '../pages/CyberSecurity';
import Technolgy from '../pages/Technology';
import Valuation from '../pages/ValuationService';
import ActuarialServices from "../pages/Actuarial";
import ESGAdvisory from "../pages/ESG";
import SustainableFinance from "../pages/Sustainable";
import FraudInvestigations from "../pages/Fraud";
import RegulatoryCompliance from "../pages/Regulatory";
import AuditAssurance from "../pages/AuditAssurance";
import PrivacyPolicy from "../pages/PrivacyPolicy";





const AppRoutes = () => {
  return (
    <>
    {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/services/wealth" element={<WealthManagement />} />
        <Route path="/services/tax" element={<TaxPlanning />} />
        <Route path="/services/risk" element={<RiskManagement />} />
        <Route path="/services/retirement" element={<RetirementPlanning />} />
        <Route path="/services/loans" element={<LoanAdvisory />} />
        <Route path="/services/investment" element={<InvestmentAdvisory />} />
        <Route path="/services/insurance" element={<InsuranceConsulting />} />
        <Route path="/services/corporate" element={<CorporateFinance />} /> 
        <Route path="/services/forensic" element={<ForensicPlanning />} />
        <Route path="/services/fintech" element={<Fintech />} />
        {/* <Route path="/services/fund" element={<Fund />} /> */}
        <Route path="/services/ma" element={<MA />} />
        <Route path="/services/Cybersecurity" element={<Cyber />} />
        
        <Route path="/services/technology" element={<Technolgy />} />
        <Route path="/services/valuation" element={<Valuation />} />
        <Route path="/services/retirement" element={<RetirementPlanning />} />
        <Route path="/services/audit" element={<AuditAssurance/>} />
        <Route path="/services/regulatory" element={<RegulatoryCompliance />} />
        <Route path="/services/fraud" element={<FraudInvestigations />} />
        <Route path="/services/grc" element={<Governance />} />
        <Route path="/services/sustainable-finance" element={<SustainableFinance />} />
        <Route path="/services/esg" element={<ESGAdvisory />} />
        <Route path="/services/actuarial" element={<ActuarialServices />} />
        
        <Route path="/services/turnaround" element={<SpecialPlanning />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
    </>
  );
};

export default AppRoutes;
