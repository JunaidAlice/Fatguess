import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.svg";
import X from "../assets/Footer/X.svg";
import Telegram from "../assets/Footer/Telegram.svg";
import insta from "../assets/Footer/insta.svg";
import Discord from "../assets/Footer/Discord.svg";
import Tiktok from "../assets/Footer/Tiktok.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer px-4 md:px-10 border-t-8 border-t-[#00A67E] bg-[#1F1F1F] text-white">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <img src={Logo} alt="Logo" className="mb-4 md:mb-0" />
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="/how-it-works" className="footer-link">
              How it works
            </a>
            <a href="/how-it-works" className="footer-link">
              Referal
            </a>
            <a href="#faq" className="footer-link">
              FAQ
            </a>
            <Link to="/terms-of-service" className="footer-link">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="w-[80%] mx-auto border-[1px] rounded-full border-gray-700 my-4"></div>
        <div className="flex flex-col md:flex-row justify-between p-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap- mb-4 md:mb-0">
            <p>&copy; 2023 FatGuess. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#">
                <img src={X} alt="X" />{" "}
              </a>
              <a href="#">
                <img src={Telegram} alt="Telegram" />{" "}
              </a>
              <a href="#">
                <img src={insta} alt="Instagram" />{" "}
              </a>
              <a href="#">
                <img src={Discord} alt="Discord" />{" "}
              </a>
              <a href="#">
                <img src={Tiktok} alt="Tiktok" />{" "}
              </a>
            </div>
          </div>
          <p className="text-center md:text-left">
            Predict responsibly and never pledge more than you can afford to
            lose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
