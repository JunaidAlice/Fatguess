import React, { useState } from "react";
import Logo from "../assets/Navbar/Logo.svg";
import Signup from "../Pages/Signup";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const ConnectWallet = ({ close }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const cross = () => {
    setIsSignup(false);
  };
  const open = () => {
    setIsSignup(true);
  };
  return (
    <>
      <section className="h-screen flex flex-col gap-10  items-center justify-center p-4 fixed w-full top-0 bg-[#1f1f1f] z-40">
        <div>
          <img src={Logo} alt="Company Logo" className="w-32" />
        </div>
        <div className="bg-[#040404] relative rounded-xl p-8 sm:p-8 max-w-md w-full shadow-lg ">
          <div className="text-center tracking-tighter text-2xl font-bold mb-6 text-[#00A67E]  w-full">
            Connect Wallet
          </div>

          <div className="flex flex-col items-center justify-center mb-6">
            <label
              htmlFor="wallet"
              className="block mb-2 tracking-tighter text-white text-sm font-medium"
            >
              Connect to wallet
            </label>
            <input
              type="text"
              id="wallet"
              placeholder="Enter your wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-3 text-white  focus:outline-none bg-transparent border-b"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <Link to="/dashboard">
              <button
                onClick={close}
                className="w-full bg-[#00A67E] tracking-tighter  hover:bg-violet-500 duration-200 text-white font-semibold rounded-md p-3 transition "
              >
                Connect Wallet
              </button>
            </Link>
          </div>
          <p className="text-white text-center text-sm">
            Don’t have an account?{" "}
            <span
              className="text-[#00A67E] hover:underline hover:cursor-pointer "
             onClick={open}
            >
              Sign Up
            </span>
          </p>
          <div
            className="text-white absolute hover:cursor-pointer top-8 left-8"
            onClick={close}
          >
            <RxCross2 />
          </div>
        </div>
      </section>

      {isSignup && <Signup cross={cross} close={close} />}
    </>
  );
};

export default ConnectWallet;
