// // src/components/Testimonials.js – Client testimonials section
// import React from 'react';

// function Testimonials() {
//   return (
//     <section id="testimonials" className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="p-6 bg-white rounded-lg shadow">
//             <p className="text-gray-800 mb-4">
//               "We have been consistently impressed by the professionalism and expertise of the firm. Their advice has been invaluable to our business."
//             </p>
//             <p className="font-semibold">Jane Doe</p>
//             <p className="text-sm text-gray-600">CFO, ABC Corp.</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow">
//             <p className="text-gray-800 mb-4">
//               "The team delivered exceptional audit and advisory support, helping us navigate complex financial regulations with ease."
//             </p>
//             <p className="font-semibold">John Smith</p>
//             <p className="text-sm text-gray-600">CEO, XYZ Ltd.</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow">
//             <p className="text-gray-800 mb-4">
//               "Their proactive approach to tax planning and compliance saved us time and money. I highly recommend their services."
//             </p>
//             <p className="font-semibold">Amit Sharma</p>
//             <p className="text-sm text-gray-600">Founder, Startup Co.</p>
//           </div>
//         </div>
//       </div>
    // </section>
//   );
// }

// export default Testimonials;


import React from "react";

const testimonials = [
  {
    text: "Finance Saarthi transformed our business's financial health. Their tax planning saved us a significant amount!",
    author: "Doni Singh, Seseo Tech Pvt. Ltd",
  },
  {
    text: "The team provided invaluable financial advice that helped me grow my personal investments. Truly professional!",
    author: "Priya Singh, Individual Investor",
  },
  // { 
  //   text: "Finance Saarthi transformed our business's financial health. Their tax planning saved us a significant amount!",
  //   author: "Rohit Kumar, CEO, Tech Solutions",
  // },
  // {
  //   text: "The team provided invaluable financial advice that helped me grow my personal investments. Truly professional!",
  //   author: "Priya Devi, Individual Investor",
  // },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <span className="quote-icon"></span>
            <p>"{t.text}"</p>
            <strong>- {t.author}</strong>
            <span className="quote-icon quote-right"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
