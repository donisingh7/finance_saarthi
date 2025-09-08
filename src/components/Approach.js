import React from "react";

const ApproachLayout = ({ title, intro, steps, image }) => {
  return (
    <section className=" py-5 my-5 " style={{backgroundColor:'rgb(207 218 227 / 41%)'}}>
      <div className="row py-5 align-items-center justify-content-center">
        
        {/* Left Side - Image */}
        <div className="img-container col-md-5  mb-4 mb-md-0  d-none d-md-block">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded shadow" style={{objectFit:'cover', height:'300px'}}
          />
        </div>
        
        {/* Right Side - Steps */}
        <div className="col-md-5 ">
          <h1 className="fw-bold mb-4" style={{fontFamily:'georgia, times,serif'}}>{title}</h1>
          <p className="text-muted mb-4">{intro}</p>

            <div className="steps">
            {steps.map((step, index) => (
              <div className="step mb-3 d-flex align-items-start" key={index}>
                <div className="icon me-4" style={{ fontSize: "1.8rem", color: "#0066cc" }}>
                  {step.icon}
                </div>
                <div>
                  <h5 className="fw-semibold">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachLayout;
