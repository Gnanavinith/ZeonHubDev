import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const chatBubbles = [
  "Need help?", 
  "Let’s build something great together!", 
  "Reach out now!"
];

const ConnectUs = () => {
  return (
    <section className="relative w-full h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  px-6 py-16 overflow-hidden flex flex-col items-center text-center">
      
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-300 "
      >
        Connect With Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-4 leading-relaxed max-w-lg"
      >
        Let’s bridge the gap between ideas and execution. Connect with us to 
        transform your digital presence with cutting-edge solutions.
      </motion.p>

      {/* Animated Chat Bubbles (Hidden on Mobile) */}
      <div className="relative w-full justify-center mt-10 h-40 hidden sm:flex">
        {chatBubbles.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 1.5 }}
            className={`absolute bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium 
              ${index === 0 ? "top-0 left-10" : index === 1 ? "top-1/2 right-10" : "bottom-0 left-20"}`}
          >
            {text}
          </motion.div>
        ))}
      </div>
      
      {/* CTA Button */}
      <Link to="/contact">
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-500 transition-all duration-300"
      >
        Contact Us <MdKeyboardArrowRight className="text-2xl" />
      </motion.button>
      </Link>
      
    </section>
  );
};

export default ConnectUs;
