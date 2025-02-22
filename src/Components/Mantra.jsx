import React from "react";
import { motion } from "framer-motion";
import Innovation from "../assets/Innovation.jpg";
import Excellence from "../assets/Excellence.jpg";
import Growth from "../assets/Growth.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Mantra = () => {
  const cards = [
    { title: "Innovation", img: Innovation },
    { title: "Excellence", img: Excellence },
    { title: "Growth", img: Growth },
  ];

  return (
    <section className="h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  flex flex-col items-center justify-center px-6 py-12 ">
      
      {/* Title Animation */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-6 text-gray-200"
      >
        Our Success Mantra
      </motion.h2>
      
      {/* Tagline Animation */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl font-semibold text-center max-w-3xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
           text-transparent bg-clip-text"
      >
        Innovate with Passion, build with Precision, and scale with Confidence !
      </motion.p>

      {/* Animated Core Values with Larger Background Images */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.5 }, // Cards appear one by one
          },
        }}
        className="mt-10 flex flex-wrap justify-center w-full gap-10"
      >
        {cards.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            className="relative bg-gray-800 p-6 rounded-2xl shadow-lg text-center max-w-xs w-80 h-80 transition-all duration-500 overflow-hidden group"
          >
            {/* Background Image Enlarged */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:brightness-50"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>

            {/* Dark Overlay Gradient for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-1000 to-transparent transition-all duration-500"></div>

            {/* Title Moves to Center on Hover */}
            <h3 className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-200 z-10 transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2 t bg-clip-text">
  {item.title}
</h3>

          </motion.div>
        ))}
      </motion.div>
<Link to="/schedule-meeting">
<motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-12 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition duration-300 flex items-center gap-1 "
              >
                Get Started Now <MdKeyboardArrowRight className="text-2xl" />
              </motion.button>

</Link>
       
            
    </section>
  );
};

export default Mantra;
