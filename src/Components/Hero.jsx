import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#1A1A1A]   ">
      <div className="container md:h-screen mx-auto py-20 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        {/* Left Content */}
        <div className="">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-4">
            PREDICT LIKE A <span className="text-emerald-400">PRO</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Choose Coin. Predict. Win. Repeat.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-64 h-64 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20164540-nkuk66FJ1X3HD9TpetLMJ5mAHOxkYE.png"
            alt="Prediction Pro Mascot"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
