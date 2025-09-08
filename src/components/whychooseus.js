import React from "react";
import { CheckCircle } from "react-feather"; // feather icons (install: npm install react-feather)

const WhyChooseUs = ({heading}) => {
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

  return (
    <div className="container  py-5 px-4" style={{backgroundColor:'rgb(237 237 237 / 74%)'}}>
      <h2 className="text-center fw-bold mb-4">{heading}</h2>
      <div className="row g-4">
        {reasons.map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className="card h-100 shadow border-0 rounded p-3 text-center" style={{boxShadow:'10px'}}>
              <div className="icon mb-3 text-primary">
                <CheckCircle size={40} />
              </div>
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted small">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
