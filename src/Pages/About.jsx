import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
} from "react-icons/md";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaApple,
  FaWindows,
  FaAws,
  FaLightbulb,
  FaUserTie,
  FaPencilRuler,
  FaCheckCircle,
  FaHandshake,
  FaSmile,
} from "react-icons/fa";
import {
  SiExpress,
  SiSequelize,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiRedux,
  SiFlutter,
  SiAdobexd,
  SiFigma,
  SiGoogleads,
  SiMeta,
  SiCanva,
  SiAdobephotoshop,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiDigitalocean,
} from "react-icons/si";

import { Link } from "react-router-dom";
import Contact from "../Components/Contact";

// FAQ Data
const faqItems = [
  {
    title: "Expertise",
    content:
      "Our team has deep industry knowledge and experience, ensuring seamless execution and reliable IT solutions.",
    icon: <FaUserTie className="text-blue-400 text-xl" />,
  },
  {
    title: "Creativity",
    content:
      "We bring fresh perspectives and creative solutions to help businesses stand out in a competitive market.",
    icon: <FaPencilRuler className="text-pink-400 text-xl" />,
  },
  {
    title: "Quality",
    content:
      "We maintain the highest quality standards to deliver robust, scalable, and efficient solutions.",
    icon: <FaCheckCircle className="text-green-400 text-xl" />,
  },
  {
    title: "Collaboration",
    content:
      "We believe in teamwork and transparency, working closely with clients to achieve outstanding results.",
    icon: <FaHandshake className="text-purple-400 text-xl" />,
  },
  {
    title: "Customer Satisfaction",
    content:
      "Our priority is to build long-term relationships by exceeding customer expectations.",
    icon: <FaSmile className="text-orange-400 text-xl" />,
  },
  {
    title: "Innovation",
    content:
      "We integrate the latest technologies and trends to drive digital transformation for businesses.",
    icon: <FaLightbulb className="text-yellow-400 text-xl" />,
  },
];

// Technologies Data
const technologies = [
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
  },
  { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-4xl" /> },
  {
    name: "Sequelize",
    icon: <SiSequelize className="text-blue-500 text-4xl" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500 text-4xl" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600 text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
  },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-4xl" /> },
  { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500 text-4xl" /> },
  { name: "Figma", icon: <SiFigma className="text-purple-400 text-4xl" /> },
  {
    name: "Google Ads",
    icon: <SiGoogleads className="text-yellow-500 text-4xl" />,
  },
  { name: "Meta Ads", icon: <SiMeta className="text-blue-600 text-4xl" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-500 text-4xl" /> },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="text-blue-600 text-4xl" />,
  },
];

// Hosting Tools Data
const hostingTools = [
  { name: "AWS", icon: <FaAws className="text-yellow-500 text-4xl" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 text-4xl" />,
  },
  { name: "Vercel", icon: <SiVercel className="text-white text-4xl" /> },
  { name: "Netlify", icon: <SiNetlify className="text-blue-400 text-4xl" /> },
  {
    name: "Digital Ocean",
    icon: <SiDigitalocean className="text-blue-500 text-4xl" />,
  },
  { name: "Apple", icon: <FaApple className="text-gray-300 text-4xl" /> },
  { name: "Windows", icon: <FaWindows className="text-blue-500 text-4xl" /> },
];

// **About Component**
const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when About page loads
  }, []);

  return (
    <div>
      <section className="w-full min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col items-center text-center">
        {/* Header */}
        <motion.h1
          className="text-center text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-10 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gray-300 block">
            Elevating Businesses with Innovative IT Solutions:
          </span>
          The ZeonHub Story
        </motion.h1>

        {/* Description */}
        <motion.div
          className="max-w-4xl mt-6 text-lg text-gray-300 leading-relaxed text-center px-6"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <p>
            ZeonHub is built on a passion for technology, reshaping the IT
            sector with innovation. We help businesses, from startups to
            enterprises, achieve digital success with expert-crafted solutions.
          </p>
        </motion.div>

        {/* Get Started Button */}
        <Link to="/schedule-meeting">
        <motion.button
          className="mt-12 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition duration-300 flex items-center gap-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get Started Now <MdKeyboardArrowRight className="text-2xl" />
        </motion.button>
        </Link>
       

        {/* FAQ Section */}
        <motion.div className="max-w-3xl mt-20 p-6">
          <h2 className="text-2xl font-semibold text-yellow-400">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 mt-3">
            Your Path to Innovation and Success!
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-2xl w-full mt-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-gray-800 px-4 py-3 text-left transition duration-300 hover:bg-gray-700"
              >
                <div className="flex items-center gap-5">
                  {item.icon}
                  <span className="font-semibold text-white">{item.title}</span>
                </div>
                {openIndex === index ? (
                  <MdKeyboardArrowUp className="text-xl text-white  transition duration-500" />
                ) : (
                  <MdKeyboardArrowDown className="text-xl text-white transition duration-500" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-200 px-4 py-3 text-black"
                >
                  {item.content}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div className="max-w-5xl mt-12">
          <h2 className="text-2xl font-semibold text-yellow-400">
            Technologies We Use
          </h2>
          <p className="text-gray-300 mt-5">
            We use modern frameworks and cloud solutions for high-performance
            applications.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:border-yellow-400 transition-all"
              >
                {tech.icon}
                <p className="text-gray-300 mt-2 text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hosting Tools Section */}
        <motion.div className="max-w-5xl mt-12">
          <h2 className="text-2xl font-semibold text-yellow-400">
            Hosting & Deployment Tools
          </h2>
          <p className="text-gray-300 mt-5">
            Reliable hosting and deployment solutions for seamless scalability
            and performance.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            {hostingTools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:border-yellow-400 transition-all"
              >
                {tool.icon}
                <p className="text-gray-300 mt-2 text-sm">{tool.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>




    <Contact/>
    </div>
  );
};

export default About;
