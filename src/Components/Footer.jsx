import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 shadow-inner">
      
      {/* Grid Layout for Responsive Design */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-yellow-400">ZeonHub</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Empowering Ideas, Elevating Businesses. We provide top-notch
            software solutions to transform your vision into reality.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["Home", "About Us", "Solutions", "Products", "Services", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase().replace(/\s/g, "")}`} className="text-gray-400 hover:text-yellow-400 transition duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white">Our Services</h3>
          <ul className="mt-4 space-y-2">
            {["Web Development", "Mobile App Development", "UI/UX Design", "Cloud Solutions", "SEO & Marketing"].map((service) => (
              <li key={service}>
                <a href={`/${service.toLowerCase().replace(/\s/g, "")}`} className="text-gray-400 hover:text-yellow-400 transition duration-300">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaInstagram />, link: "#" }
            ].map((social, index) => (
              <a key={index} href={social.link} className="text-gray-400 hover:text-yellow-400 text-xl transition duration-300">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6 mx-6"></div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ZeonHub. All Rights Reserved.
      </div>
      
    </footer>
  );
};

export default Footer;
