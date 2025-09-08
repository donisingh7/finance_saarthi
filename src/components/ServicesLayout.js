import { useState } from "react";

import "./ServicesLayout.css"; 

const Layout = ({ title, subtitle, items, bannerImg, intro, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      
      {/* Banner */}

      <section className="position-relative  text-white " style={{fontFamily: "Times New Roman"}}>
        <img
          src={bannerImg}
          alt={title}
          className="img-fluid w-100"
          style={{ height: "450px", objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6))",
          }}
        ></div>
        <div className="position-absolute translate-middle" style={{top:'50%', left:'50%'}}>
          <h1 className="fw-bold mb-3">{title}</h1>
        {/* Intro */}
        
        </div>
      </section>
      <div className="container-lg text-center shadow border-0 rounded my-5" style={{backgroundColor:"#bdbdbd3b"}}>
      {intro && <p className="lead pt-5 fw-semibold">{intro}</p>}

        {/* Full description with toggle */}
        <p className="desc pb-5 px-3">
          { description }
        </p>
      </div>
    
        


    
      
    </div>
  );
};

export default Layout;
