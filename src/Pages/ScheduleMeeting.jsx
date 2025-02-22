import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const ScheduleMeeting = () => {
  const [showText, setShowText] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when About page loads
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false); // Hide paragraph after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-10">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl mt-20 ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 text-center mb-4">
          Schedule a Meeting
        </h2>
        {showText && (
          <p className="text-gray-300 text-sm sm:text-base text-center transition-opacity duration-500">
            Please wait while we take you to Calendly.
          </p>
        )}
        {/* Ensure Calendly Widget is Clickable */}
        <div className="mt-4 w-full">
          <InlineWidget url="https://calendly.com/zeonhuboffical/30min" styles={{ height: "600px" }} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
