
// import React from "react";
// // import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <header>
//       <nav className="navbar">
//         <div className="logo">Finance Saarthi</div>
//         <ul className="nav-links">
//           <li><a href="/">Home</a></li>
//           <li><a href="#about">About</a></li>
  
//             <li><a href="#services">Services</a></li>
          
//           <li><a href="/industries">Industries</a></li>
//           <li><a href="/contactpage">Contact</a></li>
//         </ul>
//         <a href="#services" className="btn-get-started">Get Started</a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPiggyBank, FaFileInvoiceDollar, FaUsers, FaUniversity, FaHeartbeat,
  FaLaptopCode, FaLock, FaMobileAlt, FaSearch,
  FaRegChartBar, FaShieldAlt, FaBuilding, FaBalanceScale, FaHandshake,
  FaClipboardCheck, FaGavel, FaSearchDollar, FaCogs, FaLeaf, FaGlobe,
  FaCalculator, FaSyncAlt
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // We suppress hover for a short window after ANY click to avoid immediate reopen
  const suppressUntilRef = useRef(0);
  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  const servicesRef = useRef(null);
  const location = useLocation();

  // Outside click / Esc
  useEffect(() => {
    const onDocClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setOpen(false);
        suppressUntilRef.current = Date.now() + 600;
      }
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keyup", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keyup", onEsc);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
    suppressUntilRef.current = Date.now() + 600;
  }, [location.pathname]);

  const clearTimers = () => {
    if (openTimer.current) { clearTimeout(openTimer.current); openTimer.current = null; }
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };

  // HOVER INTENT: open after a tiny delay, close after a tiny delay
  const handleEnter = () => {
    if (Date.now() < suppressUntilRef.current) return; // ignore hover right after a click
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), 80);
  };

  const handleLeave = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // Trigger click — toggle and suppress hover for a bit
  const handleTriggerClick = () => {
    const next = !open;
    setOpen(next);
    suppressUntilRef.current = Date.now() + 600;
    clearTimers();
  };

  // Any click inside the mega (a link) closes and suppresses hover
  const handleMegaClick = (e) => {
    const link = e.target.closest("a");
    if (link) {
      setOpen(false);
      suppressUntilRef.current = Date.now() + 600;
    }
  };

  const closeAndSuppress = useCallback(() => {
    setOpen(false);
    suppressUntilRef.current = Date.now() + 600;
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="nav-inner">

          <div className="logo flex items-center gap-2">
            <Link to="/" className="flex items-center space-x-2" onClick={closeAndSuppress}>
              <img src="/images/navbar/FS.png" alt="Finance Saarthi Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold text-white">Finance Saarthi</span>
            </Link>
          </div>

          <ul className="nav-links">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={closeAndSuppress}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/aboutpage" onClick={closeAndSuppress}>About</Link></li>

            {/* SERVICES */}
            <li
              className={`nav-item has-mega ${open ? "open" : ""}`}
              ref={servicesRef}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button
                className="nav-link services-trigger"
                aria-expanded={open}
                aria-haspopup="true"
                onClick={handleTriggerClick}
              >
                Services
              </button>

              <div className="mega" role="menu" aria-label="Services menu" onClick={handleMegaClick}>
                <h2 className="mega-heading"><i>Solutions and Services</i></h2>

                <div className="mega-grid">
                  {/* Column 1 */}
                  <div className="dropdown-col">
                    <h3 className="dropdown-title">Personal Finance</h3>
                    <Link to="/services/wealth" className="dropdown-link"><FaPiggyBank /> Wealth Management</Link>
                    <Link to="/services/tax" className="dropdown-link"><FaFileInvoiceDollar /> Tax Planning</Link>
                    <Link to="/services/retirement" className="dropdown-link"><FaUsers /> Retirement Planning</Link>
                    <Link to="/services/loans" className="dropdown-link"><FaUniversity /> Loan Advisory</Link>
                    <Link to="/services/insurance" className="dropdown-link"><FaHeartbeat /> Insurance Consulting</Link>

                    <h3 className="dropdown-title mt">Technology &amp; Digital</h3>
                    <Link to="/services/technology" className="dropdown-link"><FaLaptopCode /> Technology Transformation</Link>
                    <Link to="/services/cybersecurity" className="dropdown-link"><FaLock /> Cybersecurity</Link>
                    <Link to="/services/fintech" className="dropdown-link"><FaMobileAlt /> FinTech Advisory</Link>
                    <Link to="/services/forensic" className="dropdown-link"><FaSearch /> Forensic Technology</Link>
                  </div>

                  {/* Column 2 */}
                  <div className="dropdown-col">
                    <h3 className="dropdown-title">Investment &amp; Corporate Finance</h3>
                    <Link to="/services/investment" className="dropdown-link"><FaRegChartBar /> Investment Advisory</Link>
                    <Link to="/services/risk" className="dropdown-link"><FaShieldAlt /> Risk Management</Link>
                    <Link to="/services/corporate" className="dropdown-link"><FaBuilding /> Corporate Finance</Link>
                    <Link to="/services/valuation" className="dropdown-link"><FaBalanceScale /> Valuation Services</Link>
                    <Link to="/services/ma" className="dropdown-link"><FaHandshake /> M&amp;A Advisory</Link>
                  </div>

                  {/* Column 3 */}
                  <div className="dropdown-col">
                    <h3 className="dropdown-title">Governance, Audit &amp; More</h3>
                    <Link to="/services/audit" className="dropdown-link"><FaClipboardCheck /> Audit &amp; Assurance</Link>
                    <Link to="/services/regulatory" className="dropdown-link"><FaGavel /> Regulatory Compliance</Link>
                    <Link to="/services/fraud" className="dropdown-link"><FaSearchDollar /> Fraud &amp; Investigations</Link>
                    <Link to="/services/grc" className="dropdown-link"><FaCogs /> Governance, Risk &amp; Compliance</Link>
                    <Link to="/services/esg" className="dropdown-link"><FaLeaf /> ESG &amp; Sustainability</Link>
                    <Link to="/services/sustainable-finance" className="dropdown-link"><FaGlobe /> Sustainable Finance</Link>
                    <Link to="/services/actuarial" className="dropdown-link"><FaCalculator /> Actuarial Services</Link>
                    <Link to="/services/turnaround" className="dropdown-link"><FaSyncAlt /> Special Situations &amp; Turnaround</Link>
                  </div>
                </div>

                <div className="mega-foot">
                  Explore our wide range of financial consulting services designed to help individuals and
                  businesses achieve financial stability, growth, compliance, and long-term success.
                </div>
              </div>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/industries" onClick={closeAndSuppress}>Industries</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contactpage" onClick={closeAndSuppress}>Contact</Link></li>
          </ul>

          <Link to="/contactpage" className="btn-get-started" onClick={closeAndSuppress}>Get Started</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


