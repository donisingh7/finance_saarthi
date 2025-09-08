
import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Our Firm</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          Founded in 2016 and headquartered in Pitampura, Delhi, Finance Saarthi <br></br>offers end-to-end financial services. Our network of experienced professionals provides personalized strategies in taxation, compliance, investments, and business advisory, serving clients worldwide.
          {/* We are a leading chartered accountancy firm with decades of experience, 
          providing a comprehensive range of financial services to businesses and individuals. 
          Our team of qualified professionals is committed to integrity and excellence in every engagement. */}
        </p>
        {/* Key metrics highlighting experience, clients, etc. */}
        <div className="mt-10 flex flex-wrap justify-center">
          <div className="m-4 text-center">
            <p className="text-4xl font-bold text-blue-600">10+</p>
            <p className="text-gray-800">Years of Experience</p>
          </div>
          <div className="m-4 text-center">
            <p className="text-4xl font-bold text-blue-600">500+</p>
            <p className="text-gray-800">Clients Served</p>
          </div>
          <div className="m-4 text-center">
            <p className="text-4xl font-bold text-blue-600">98%</p>
            <p className="text-gray-800">Compliance Rate</p>
          </div>
          {/* <div className="m-4 text-center">
            <p className="text-4xl font-bold text-blue-600">50+</p>
            <p className="text-gray-800">Expert Professionals</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
