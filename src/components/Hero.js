
// import React from 'react';

// function Hero() {
//   return (
//     <section 
//   className="text-white flex items-center justify-center hero-background"
//   style={{ minHeight: '500px' }}
// >
//   <div className="bg-opacity-50 p-8 w-full text-center">
//     <h1 className="text-4xl md:text-5xl font-bold mb-4">
//       Professional Chartered Accountants
//     </h1>
//     <p className="text-lg md:text-xl mb-6">
//       Providing quality Audit, Taxation, Advisory & Compliance services
//     </p>
//     <a href="#contact" className="cta-button inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded">
//       Get in Touch
//     </a>
//   </div>
// </section>
//   );
// }

// export default Hero;

import React from "react";
// import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Trusted Partner for All Financial and Tax Needs.</h1>
        <p>Providing quality Audit, Taxation, Advisory & Compliance services</p>
        <div className="hero-buttons">
          <a href="#footer" className="btn-primary">Get in Touch</a>
          <a href="#services" className="btn-secondary">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
