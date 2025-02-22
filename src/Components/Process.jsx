import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaRocket, FaCogs } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-gray-300 text-lg md:text-xl" />,
    time: "(0 TO 1 WEEK)",
    title: "Discovery",
    description:
      "Our product and design team works with founders who've just set out on the adventure to assist in user discovery; Iterating, narrowing, and refining the problem statement they're working on. We help plan user discovery interviews, contextual inquiry sessions, and surveys, map customer journeys, and pain points, and identify specific opportunities to begin solving.",
  },
  {
    icon: <FaPencilRuler className="text-gray-300 text-lg md:text-xl" />,
    time: "(1 TO 2 WEEKS)",
    title: "Prototyping",
    description:
      "While prototyping, our focus is to help the founders learn fast and iterate fast. Our design and product team plans brainstorming sessions with the founders, stakeholders, and users to ideate solutions. We then quickly build wireframes or prototypes, test with users, learn in the real world, and repeat.",
  },
  {
    icon: <FaRocket className="text-gray-300 text-lg md:text-xl" />,
    time: "(2 TO 4 WEEKS)",
    title: "MVP",
    description:
      "After a few fast cycles of prototyping and iterating, we scope out the MVP. We work with the Founders and users to prioritize features that will enable an entry into the market. Our expertise in No-code tools, Generative AI APIs, and our versatile developers experienced in working on startups come in handy!",
  },
  {
    icon: <FaCogs className="text-gray-300 text-lg md:text-xl" />,
    time: "(6 TO 18 MONTHS)",
    title: "Build For Scale",
    description:
      "By now, founders have momentum in the market and there's a product-market fit. It's time to refine and scale. Our developers roll up their sleeves and build a product that is optimized for scale in cost, performance, ease of adding new features, security, and overall system reliability.",
  },
];

const Process = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-6 py-16">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-gray-300 mt-10 drop-shadow-lg "
      >
        Our Process
      </motion.h1>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
           text-transparent bg-clip-text mt-6 text-lg"
      >
        <p>
          Founders collaborate with us at different stages of building—
          discovery, prototyping, MVP, or directly scaling!
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="max-w-5xl mx-auto mt-12 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gray-400 w-[2px] h-full hidden md:block"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col md:flex-row items-center gap-10 overflow-hidden"
          >
            {/* Left Side (Time Duration & Icon) */}
            <div className="relative md:w-1/3 w-full text-center md:text-left">
              {/* Timeline Dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg hidden md:flex glow-effect"
              >
                {step.icon}
              </motion.div>

              <p className="text-gray-300 text-lg font-bold mt-10">
                {step.time}
              </p>
            </div>

            {/* Right Side (Content) */}
            {/* Right Side (Content) */}
<div className="md:w-2/3 w-full bg-gray-800 p-6 rounded-xl shadow-lg mt-10 flex flex-col items-center md:items-start">
  <h2 className="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-center md:text-left">
    {step.title}
  </h2>
  <p className="text-gray-300 mt-2 text-center md:text-left">
    {step.description}
  </p>
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
