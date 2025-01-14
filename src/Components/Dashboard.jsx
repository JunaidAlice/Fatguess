import React, { useState, useEffect } from "react";
import bull from "../assets/Hero/bull.svg";
import clock from "../assets/Dashboard/clock.svg";
import CryptoGrid from "../Components/CryptoGrid";
// Countdown Timer Hook
const useCountdown = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return formatTime(timeLeft);
};

// Main Component
const PredictionBanner = () => {
  const countdown = useCountdown(3600); // 1-hour countdown

  return (
    <>
      <div className=" px-10 md:px-32  flex items-center md:justify-evenly justify-center bg-[#1F1F1F] text-white p-16 w-full">
        {/* Left Section */}
        <div className="flex flex-col ">
          <h1 className="text-2xl md:text-4xl font-bold md:text-start text-center">
            PREDICT LIKE A <span className="text-[#00A67E]">PRO</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1 md:text-start text-center">
            Choose Coin. Predict. Win. Repeat.
          </p>

          {/* Timer Box */}
          <div className="flex items-center bg-[#141415] p-3 rounded-lg mt-3">
            <span className="text-xl mr-2 border p-2 rounded-md bg-[#00A67E]">
              <img src={clock} alt="" />
            </span>
            <div className="flex flex-col ">
              <span className="text-sm text-center">Next Draw:</span>
              <span className="ml-2 text-xl font-bold">{countdown}</span>
            </div>
          </div>
        </div>

        {/* Right Section - Character Image */}
        <img
          src={bull}
          alt="Character"
          className="h-[402px] w-[249px] md:block hidden object-contain"
        />
      </div>
      <CryptoGrid />
    </>
  );
};

export default PredictionBanner;
