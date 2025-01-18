import React from "react";
import bull from "../assets/Hero/bull.svg";

export default function Hero() {
  return (
    <section className="bg-[#1F1F1F]   px-10 ">
      <div className="container px-2 md:px-16 py-16 lg:px-0 mx-auto  flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
   {/* Left Content */}
<div className="">
  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-100 mb-6 leading-tight">
    PREDICT LIKE A <span className="text-[#00A67E]">PRo</span>
  </h1>
  <p className="text-xl md:text-2xl  text-gray-200">
    Choose Coin. Predict. Win. Repeat.
  </p>
</div>


        {/* Right Image */}
        <div className="w-[276px] h-[491px] mt-8 md:mt-0 ">
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
