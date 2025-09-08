import React from "react";
// import "./ServiceGrid.css"; // custom CSS for hover effect

const PhotoGrid = ({ items ,subtitle }) => {
  return (
    <div className="container py-4  ">
      <h1 className="text-center my-4 fw-bold" style={{fontFamily:"Times New Roman" , fontSize:'2.5rem'}}>{subtitle}</h1>
      <div className="row g-5 p-5 ">
        {items.map((item, index) => (
          
          <div key={index} className="col-md-4 col-sm-6 mb-5 position-relative ">
            <div className="service-box d-flex  position-relative overflow-hidden rounded shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-100 h-100 object-fit-cover"
              />
              
              <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                <h5 className="fw-bold text-white">{item.title}</h5>
                <p className="text-white small">{item.description}</p>
              </div>
              <div className="position-absolute top- 100 bottom-0 start-50 translate-middle-x p-2 rounded w-100 " style={{backgroundColor:'rgb(104 ,140, 182) ' ,fontFamily:"Times New Roman" , fontSize:'1.5rem'}} ><h4 className="text-center fw-bold text-white" 
               >{item.title}</h4>
            </div>
            </div>
            {/* <div className="position-absolute top-75 start-50 translate-middle-x  rounded w-75 " style={{backgroundColor:'rgb(104 ,140, 182) ' ,fontFamily:"Times New Roman" , fontSize:'1.5rem'}} ><h4 className="text-center fw-bold text-white" 
               >{item.title}</h4>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
