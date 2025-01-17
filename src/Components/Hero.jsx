import React from "react";
import bull from "../assets/Hero/bull.svg";

export default function Hero() {
  return (
    <section className="bg-[#1F1F1F]   ">
      <div className="container  mx-auto py-32 flex flex-col md:flex-row md:justify-evenly items-center text-center md:text-left">
        {/* Left Content */}
        <div className="">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-4">
            PREDICT LIKE A <span className="text-[#00A67E]">PRO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Choose Coin. Predict. Win. Repeat.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-[276px] h-[491px] mt-8 md:mt-0 flex justify-center">
          <img
            src={bull}
            alt="Prediction Pro Mascot"
            className="object-contain w-full h-full "
          />
        </div>
      </div>{" "}
      <div className="w-[80%] mx-auto border-[1px] rounded-full border-gray-700"></div>
    </section>
  );
}
