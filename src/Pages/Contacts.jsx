import React from "react";
import { MdOutlineWifiCalling3, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Email from "../Components/Email";
import Contact from "../Components/Contact";
import { useEffect } from "react";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when About page loads
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
        <div className="max-w-[1200px] mx-auto mt-10">
          {/* ------------ Heading -------------- */}
          <div className="text-center px-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-10">
              Get in Touch
            </h3>
            <h1 className="text-lg mt-3 text-gray-300">
              Connecting People with Knowledge
            </h1>
          </div>

          {/* ------------ Card Section ------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-10 py-16">
            {/* Phone Section */}
            <div className="relative h-60 flex flex-col items-center justify-center bg-gray-800  rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 p-5">
              <div className="text-5xl w-16 h-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-yellow-400 rounded-full mb-5 shadow-md transition-transform duration-200 hover:scale-110">
                <MdOutlineWifiCalling3 />
              </div>
              <div className="text-xl font-semibold text-gray-200 tracking-wide">
                Call Us Anytime
              </div>
              <a
                href="tel:+916374890392"
                className="text-lg text-blue-400 mt-2 hover:underline"
              >
                +91 6374890392
              </a>
            </div>

            {/* Email Section */}
            <a href="mailto:Zeonhubofficial@gmail.com">
              <div className="relative h-60 flex flex-col items-center justify-center bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 p-5 cursor-pointer">
                <div className="text-5xl w-16 h-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-blue-400 rounded-full mb-5 shadow-md transition-transform duration-200 hover:scale-110">
                  <MdEmail />
                </div>
                <div className="text-xl font-semibold text-gray-200 tracking-wide">
                  Drop Us a Mail
                </div>
                <div className="text-lg text-gray-400 mt-2">
                  zeonhubofficial@gmail.com
                </div>
              </div>
            </a>

            {/* Location Section */}
            <div className="relative h-60 flex flex-col items-center justify-center bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 p-5 cursor-pointer shadow-lg rounded-2xl">
              <div className="text-5xl w-16 h-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-green-400 rounded-full mb-5 shadow-md transition-transform duration-200 hover:scale-110">
                <FaLocationDot />
              </div>
              <div className="text-xl font-semibold text-gray-200 tracking-wide">
                Visit Our Office
              </div>
              <div className="text-lg text-gray-400 mt-2 text-center">
                Karumathampatti, Coimbatore
              </div>
            </div>
          </div>

          {/* ---------------Contact--------------- */}
          <div className=" mb-20">
            <div className="text-3xl md:text-4xl font-bold text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-10">
                Contact with us
              </h3>
              <h1 className="mt-3 text-gray-300 text-3xl">
                Have Any Questions? Let's Talk
              </h1>
            </div>
            <div className=" gap-20 mt-10">
              {/* Left - Contact Form */}
              <div className="rounded-2xl shadow-2xl">
                <Email />
              </div>

              {/* Right - Map */}
              <div className=" rounded-2xl overflow-hidden mt-20">
                <iframe
                  title="Google Map"
                  className="w-full h-full min-h-[400px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3996026199345!2d77.0273126!3d11.0984482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ffcb711accab%3A0x434cbe20e94cf8de!2sKarumathampatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708595956895!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Contacts;
