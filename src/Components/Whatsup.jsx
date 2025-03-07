import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-5 flex items-center justify-center">
      {/* Glowing Effect */}
      <div className="absolute w-16 h-16 bg-green-500 rounded-full animate-ping opacity-90"></div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6374890392"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-green-500 p-3 rounded-full s shadow-green-500 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={40} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
