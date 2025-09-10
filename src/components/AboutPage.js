import React from "react";
import about from "../images/about/about.webp";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-30 pl-10 pr-10">
      <div className="mx-auto md:px-0 lg:px-0 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Full Image */}
        <div className="flex justify-center items-center h-full w-full">
          <img
            src={about}
            alt="About SOSEOTECH"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-left">
            About <span className="text-yellow-500">Finance Saarthi</span>
          </h2>

          {/* Theory Content */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              <strong>Finance Saarthi</strong> was founded in 2016 and headquartered in Pitampura, Delhi. Finance Saarthi offers end-to-end financial services. Our network of experienced professionals provides personalized strategies in taxation, compliance, investments, and business advisory, serving clients worldwide.
              <br></br>
              For us, finance is more than just numbers—it’s about enabling people and organizations to achieve their ambitions with confidence and clarity.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              At Finance Saarthi, we believe that every financial decision—big or small—shapes the future of businesses and individuals. Our consultative approach ensures that each solution is not only compliant with regulatory frameworks but also optimized for long-term growth.
            </p>
          </div>
        </div>
      </div>
      <div class="pt-10 pl-15">
        {/* Vision & Mission */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our<span className="text-yellow-500"> Vision</span></h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            To be the most reliable and innovative financial advisory partner,
            empowering businesses and individuals to achieve sustainable growth,
            financial security, and long-term success.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our<span className="text-yellow-500"> Mission</span></h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-1">
            <li>Simplify complex financial and compliance matters with expert guidance.</li>
            <li>Deliver transparent, ethical, and customized solutions.</li>
            <li>Leverage technology and innovation for smarter financial services.</li>
            <li>Build long-term client relationships as their trusted “Saarthi”.</li>
          </ul>

          {/* Values */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Our<span className="text-yellow-500"> Values</span></h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li><strong>Integrity & Trust:</strong> Ethical practices in every service.</li>
            <li><strong>Client-Centric Approach:</strong> Your growth is our success.</li>
            <li><strong>Excellence & Precision:</strong> Accuracy and value creation at every step.</li>
            <li><strong>Innovation:</strong> Modern tools and technology for better solutions.</li>
          </ul>
      </div>

    </section>
  );
}