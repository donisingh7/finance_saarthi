// src/components/Contact.js – Contact form and info section
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded px-3 py-2" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded px-3 py-2" 
                  placeholder="Your Email" 
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea 
                  className="w-full border border-gray-300 rounded px-3 py-2" 
                  rows="4" placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Details and Map */}
          <div className="flex flex-col space-y-6">
            <div className="mt-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2269563902537!2d75.75483687437215!3d26.864529476675866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db570c0c4f4d3%3A0x252e73c345b214c5!2sVARDHMAN%20EMITRA%20%26%20FINANCIAL%20SERVICES!5e0!3m2!1sen!2sin!4v1754661366025!5m2!1sen!2sin" 
            width="100%" 
            height="230" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
