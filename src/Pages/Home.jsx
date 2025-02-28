import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import WhoWeAre from "../Components/WhoWeAre";
import Mantra from "../Components/Mantra";
import ServicesIntro from "../Components/ServicesIntro";
import ConnectUs from "../Components/ConnectUs";
import Faq from "../Components/Faq";
import Process from "../Components/Process";
import Email from "../Components/Email";
import { Link } from "react-router-dom";


const Home = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when About page loads
    }, []);
  const texts = [
    "Transform Ideas into Reality",
    "Build Scalable Software Solutions",
    "Empower Businesses with Technology",
    "Innovate with Cutting-Edge Development",
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100; // Faster deleting speed

    if (!isDeleting && charIndex < texts[index].length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (charIndex === texts[index].length && !isDeleting) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      // Switch to the next text
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [charIndex, index, isDeleting]);

  return (
    <div>
       <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white text-center px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold"
      >
        We <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text ">#ZeonHub</span>{" "}
        <span className="ml-2 text-white">{displayedText}</span>
        <span className="animate-blink">|</span> {/* Blinking Cursor */}
      </motion.h1>

      {/* Subheading */}
      <p className="mt-10 text-xl font-extrabold text-white tracking-wide">
        "Empowering Ideas, Elevating Businesses!"
      </p>

      <div className="flex gap-5 mt-5">
  {/* Get Started Button */}
  <Link to="/schedule-meeting">
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full 
      hover:bg-blue-500 transition duration-300 flex items-center gap-1 
      text-sm sm:text-base md:text-lg "
    >
      Get Started <MdKeyboardArrowRight className="text-2xl" />
    </motion.button>
  </Link>

  {/* About Us Button */}
  <Link to="/about">
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full 
      hover:bg-blue-500 transition duration-300 flex items-center gap-1 
      text-sm sm:text-base md:text-lg "
    >
      About Us <MdKeyboardArrowRight className="text-2xl" />
    </motion.button>
  </Link>
</div>


      
    </div >

  <WhoWeAre/>
  <Mantra/>
  <ServicesIntro/>
  <Process/>
  <Faq/>
 
  <ConnectUs/>

  <Email/>

  
    </div>
   
  );
};

export default Home;
