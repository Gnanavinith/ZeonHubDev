import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

// Stats Data
const statsData = [
  { finalNumber: 20, label: "Projects Completed", suffix: "+" },
  { finalNumber: 2, label: "Years Experience", suffix: "+" },
  { finalNumber: 100, label: "Client Satisfaction", suffix: "%" },
];

const WhoWeAre = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [numbers, setNumbers] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (inView) {
      const intervals = statsData.map((stat, index) => {
        let current = 0;
        const increment = stat.finalNumber / 50;
        return setInterval(() => {
          current += increment;
          setNumbers((prev) => {
            const newNumbers = [...prev];
            newNumbers[index] = Math.min(Math.floor(current), stat.finalNumber);
            return newNumbers;
          });

          if (current >= stat.finalNumber) clearInterval(intervals[index]);
        }, 30);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-20 py-16 gap-10"
    >
      {/* Content */}
      <div className="w-full max-w-3xl">
       
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-10 text-gray-200"
        >
          Who We Are?
        </motion.h2>

        
       

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl text-gray-200 leading-relaxed"
        >
          At{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text font-bold">
            ZeonHub
          </span>
          , Transforming Disruptive Industries Through Innovative IT Solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-300 text-base"
        >
          ZeonHub started with a vision to bridge the gap between innovation and technology. What began as a small team
          of passionate developers has now grown into a full-fledged tech firm delivering high-quality digital solutions.
        </motion.p>

        {/* Animated Stats Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="relative bg-gray-800 p-4 rounded-xl shadow-lg w-[140px] sm:w-[160px] flex flex-col items-center 
                           hover:border-yellow-400 transition-all duration-300 group"
            >
              {/* Neon Circular Number Badge */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="relative flex items-center justify-center w-24 h-24 rounded-full  
                           text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text 
                           shadow-lg group-hover:shadow-yellow-400 transition-all duration-300"
              >
                {numbers[index]}
                {item.suffix}
                <div className="absolute inset-0 animate-ping bg-blue-500 opacity-20 rounded-full"></div>
              </motion.div>

              {/* Stat Label */}
              <p className="text-gray-300 text-sm mt-3 group-hover:text-yellow-400 transition duration-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/about">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 px-6 py-3 bg-blue-700 text-gray-100 font-bold rounded-full hover:bg-blue-500 transition duration-300 flex items-center justify-center mx-auto"
        >
          Learn More <MdKeyboardArrowRight className="text-xl ml-2" />
        </motion.button>
        </Link>
       
      </div>
    </section>
  );
};

export default WhoWeAre;
