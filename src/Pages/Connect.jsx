import React, { useState } from "react";
import Logo from "../assets/Navbar/Logo.svg";
import Signup from "../Pages/Signup";

const ConnectWallet = ({ visible }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleConnect = () => {
    if (walletAddress) {
      setIsConnected(true);
      alert(`Wallet Connected: ${walletAddress}`);
    } else {
      alert("Please enter a wallet address.");
    }
  };
  if (!visible) return null;

  return (
    <>
      <section className="bg- h-screen flex flex-col gap-10 items-center justify-center p-4 fixed w-full  top-0 backdrop-blur-xl">
        <div>
          <img src={Logo} alt="Company Logo" className="w-32" />
        </div>
        <div className="bg-[#040404] rounded-xl p-8 sm:p-10 md:p-16 lg:p-20 max-w-md w-full shadow-lg">
          <h1 className="text-center text-[#00A85C] text-2xl font-bold mb-6">
            {isConnected ? "Wallet Connected" : "Connect Wallet"}
          </h1>
          <div className="flex flex-col items-center justify-center mb-6">
            <label
              htmlFor="wallet"
              className="block mb-2 text-white text-sm font-medium"
            >
              Connect to wallet
            </label>
            <input
              type="text"
              id="wallet"
              placeholder="Enter your wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-3  text-white bor
         focus:outline-none bg-transparent "
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={handleConnect}
              className="w-full bg-[#00A85C] hover:bg-green-700 text-white font-semibold rounded-md p-3 transition duration-300"
            >
              {isConnected ? "Connected" : "Connect Wallet"}
            </button>
          </div>
          <p className="text-white text-center text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => setIsSignup(true)}
              className="text-[#00A85C] hover:underline hover:cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </section>
      <Signup visible={isSignup} />
    </>
  );
};

export default ConnectWallet;
