// src/components/HomePage.js – Landing page assembly
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
// import Contact from './Contact';
import Footer from './Footer';
import ContactUs from './ContactPage'

function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
