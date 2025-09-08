import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Mail, Phone } from "lucide-react"; // npm i lucide-react;

function Footer() {
  return (
    <footer id ="footer" className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          {/* <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-300">
                  Address: 2nd Floor, Vardhman Arihant Bhawan, 201, Plot No. 25, Block KP, Comm. Complex, Pitampura, Delhi, 110034
                </p>
              </li>
              <li>
                <p className="text-gray-300">Phone: +91 9672777506</p>
              </li>
              <li>
                <p className="text-gray-300">Email: contact@yourcompany.com</p>
              </li>
            </ul>
          </div> */}

          {/* <div className="space-y-4">
            <h4>FINANCE SAARTHI</h4>

            <ul className="mt-6 space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <span className="footer-icon">
                  <Mail className="h-5 w-5 text-amber-300" />
                </span>
                <a href="mailto:team.financesaarthi@gmail.com" className="footer-link">
                  team.financesaarthi@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="footer-icon">
                  <Phone className="h-5 w-5 text-amber-300" />
                </span>
                <div className="space-y-0.5">
                  <a href="tel:+91 9672777506" className="footer-link">+91 9672777506</a>
                </div>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 class="relative text-sm font-extrabold uppercase tracking-wide text-white after:mt-1 after:block after:h-0.5 after:w-16 after:bg-amber-400 after:content-['']">FINANCE SAARTHI</h4>
            <ul class="mt-6 space-y-4"><li class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-500/40">
              <svg viewBox="0 0 24 24" class="h-5 w-5 text-amber-300" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"></path>
                </svg>
                </span>
                <a href="mailto:team.financesaarthi@gmail.com" class="text-neutral-300 hover:text-white hover:underline underline-offset-4">team.financesaarthi@gmail.com</a>
                </li>
                <li class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-500/40">
                <svg viewBox="0 0 24 24" class="h-5 w-5 text-amber-300" fill="currentColor">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.56 3.6.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.3 21 3 12.7 3 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.19 2.5.56 3.6a1 1 0 0 1-.24 1L6.6 10.8Z"></path>
                  </svg>
                  </span>
                  <div class="space-y-0.5">
                    <a href="tel:+919672777506" class="block text-neutral-300 hover:text-white hover:underline underline-offset-4">+91 9672777506</a>
                    </div>
                    </li>
              </ul>
          </div>




          <div><h4 class="relative text-sm font-extrabold uppercase tracking-wide text-white
                           after:mt-1 after:block after:h-0.5 after:w-12 after:bg-amber-400 after:content-['']">COMPANY</h4><ul class="mt-6 space-y-3"><li><a class="text-neutral-300 hover:text-white hover:underline underline-offset-4" href="/about">About Us</a></li><li><a class="text-neutral-300 hover:text-white hover:underline underline-offset-4" href="/blog">Services</a></li><li><a class="text-neutral-300 hover:text-white hover:underline underline-offset-4" href="/contact">Contact Us</a></li></ul></div>


          {/* Company
          <div className="space-y-4">
            <h4>COMPANY</h4>
             <ul className="mt-6 space-y-4 pt-4  text-center align-center">
                <li><a className="footer-link" href="/about">About Us</a></li>
                <li><a className="footer-link" href="/blog">Services</a></li>
                <li><a className="footer-link" href="/blog">Industries</a></li>
                <li><a className="footer-link" href="/contact">Contact Us</a></li>
              </ul>
          </div> */}



          <div><h4 class="relative text-sm font-extrabold uppercase tracking-wide text-white
                           after:mt-1 after:block after:h-0.5 after:w-12 after:bg-amber-400 after:content-['']">FOLLOW US</h4>
                           <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaTwitter size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaInstagram size={30} />
              </a>
            </div>
                           </div>

          







{/* 
          {/* Social Media Links */}
          {/* <div className="space-y-3">
            <h4>FOLLOW US</h4>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaTwitter size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaInstagram size={30} />
              </a>
            </div>
          </div> */} 

         

          {/* Contact Details and Map */}
          <div className="flex flex-col space-y-3">
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

      
        {/* Bottom bar */}
         <div className="mt-10 border-t border-neutral-600/40 pt-6 text-center text-sm text-neutral-400">
           <p>&copy; 2025 Finance Saarthi. All rights reserved.</p>
        </div>

      </div>
    </footer>

  );
}

export default Footer;



