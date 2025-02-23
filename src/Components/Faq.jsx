import React, { useState } from "react";
import Problem from "../assets/Problem.png";

const faqData = [
  {
    question: "How can The ZeonHub help my business?",
    answer: "ZeonHub provides tailored digital solutions that streamline your operations, enhance customer engagement, and drive business growth."
  },
  {
    question: "How can I initiate a partnership with The ZeonHub?",
    answer: "You can initiate a partnership by contacting us through our website or scheduling a meeting with our team."
  },
  {
    question: "What sets ZeonHub apart from other digital transformation companies?",
    answer: "Our expertise in cutting-edge technologies, customer-centric approach, and tailored solutions make us stand out."
  },
  {
    question: "How do I get started with ZeonHub?",
    answer: "Simply reach out to us via our contact page, and our team will guide you through the process."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto py-12 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-12">
        
        {/* FAQ Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-2">Frequently Asked & Questions</h1>
          <p className="mb-6 text-xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
            Dedicated to helping with all of your needs.
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-lg overflow-hidden text-gray-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold bg-gray-900  transition"
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-200 border-t border-gray-600 text-black">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image: Hidden on Small Screens, Right Side on Large Screens */}
        {/* Image with Black Overlay (Hidden on Small Screens, Right Side on Large Screens) */}
<div className="hidden lg:flex w-full lg:w-1/2 justify-end mt-40 relative group overflow-hidden rounded-lg">
  {/* Background Image */}
  <img 
    src={Problem} 
    alt="Problem Solving" 
    className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-500 "
  />

  {/* Black Transparent Overlay */}
  <div className="absolute top-0 left-10 w-full h-full bg-black/20 rounded-lg transition-all duration-500 "></div>
</div>

      </div>
    </div>
  );
};

export default Faq;
