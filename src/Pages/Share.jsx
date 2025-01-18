import React from "react";
import CoinLogo from "../assets/Dashboard/bitcoin.png"; // Adjust the path as necessary
import twitter from "../assets/Share/X.svg";
import fb from "../assets/Share/fb.svg";
import tiktok from "../assets/Share/tiktok.svg";
import discord from "../assets/Share/discord.svg";
import insta from "../assets/Share/insta.svg";
import telegram from "../assets/Share/telegram.svg";
// Static prediction data
const prediction = {
  price: "$94,978.19",
  date: "30 Dec 2024 00.00.00 UTC",
};

// Social media icons array
const socialLinks = [
  { icon: twitter, url: "#" },
  { icon: fb, url: "#" },
  { icon: tiktok, url: "#" },
  { icon: discord, url: "#" },
  { icon: insta, url: "#" },
  { icon: telegram, url: "#" },
];

export default function Share({ visible }) {
  if (!visible) return null;
  return (
    <section className="fixed top-0 w-full  bg-[#1f1f1f]  flex justify-center items-center h-screen">
      <div className="bg-[#141414] text-white rounded-l p-6 max-w-md w-full text-center">
        {/* Bitcoin Icon */}
        <div className="flex justify-center mb-4">
          <img src={CoinLogo} alt="Bitcoin" className="w-12 h-12" />
        </div>

        {/* Prediction Heading */}
        <h1 className="text-2xl text-gray-200 font-bold mb-2">
          Awesome Prediction <span>🎯</span>
        </h1>
        <p className="text-sm text-gray-200 mb-6 font-bold">
          I predicted the bitcoin price will be
        </p>

        {/* Predicted Price */}
        <p className="text-4xl font-bold text-[#00A85C] mb-2">
          {prediction.price}
        </p>
        <p className="text-sm tracking-wider text-gray-200 mb-6">on {prediction.date}</p>
        <div className=" py-3 px-4 rounded-md bg-[#00A85C] hover:bg-violet-500 duration-200">
          {/* Share Button */}
          <button className=" text-gray-200  rounded mb-4">
            Share your prediction
          </button>

          {/* Social Media Icons using map() */}
          <div className="flex justify-center space-x-4  text-gray-400">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="hover:text-white">
                <img src={social.icon} className=" size-5" alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
