import React, { useState } from "react";
import logo1 from "../assets/Dashboard/bitcoin.png";
import logo2 from "../assets/Dashboard/eth.png";
import logo3 from "../assets/Dashboard/xrp.png";
import logo4 from "../assets/Dashboard/sol.png";
import logo5 from "../assets/Dashboard/bitcoin.png";
import logo6 from "../assets/Dashboard/cardano.png";
import logo7 from "../assets/Dashboard/tron.png";
import logo8 from "../assets/Dashboard/avalan.png";
import logo9 from "../assets/Dashboard/chainlink.png";
import logo10 from "../assets/Dashboard/ton.png";
import logo11 from "../assets/Dashboard/sui.png";
import logo12 from "../assets/Dashboard/stellar.png";
import { BsTrophy } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import share from '../assets/Dashboard/share.svg'

// Import Graph Images
import uptrendGraph from "../assets/Dashboard/graph1.svg";
import downtrendGraph from "../assets/Dashboard/graph2.svg";
import { Link } from "react-router-dom";
import PredictionCard from "../Pages/Predictionboard";

// Sample Crypto Data
const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$96,500.11",
    change: "8.6%",
    trend: "up",
    color: "green-500",
    icon: logo1,
    graph: uptrendGraph,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$1,800.25",
    change: "-2.4%",
    trend: "down",
    color: "red-500",
    icon: logo2,
    graph: downtrendGraph,
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: "$0.50",
    change: "4.6%",
    trend: "up",
    color: "green-500",
    icon: logo3,
    graph: uptrendGraph,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$20.75",
    change: "0.45%",
    trend: "up",
    color: "green-500",
    icon: logo4,
    graph: uptrendGraph,
  },
  {
    name: "Binance",
    symbol: "BNB",
    price: "$96,500.11",
    change: "8.6%",
    trend: "up",
    color: "green-500",
    icon: logo5,
    graph: uptrendGraph,
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$1,800.25",
    change: "-23%",
    trend: "down",
    color: "red-500",
    icon: logo6,
    graph: downtrendGraph,
  },
  {
    name: "TRON",
    symbol: "TRX",
    price: "$0.50",
    change: "-3.9%",
    trend: "down",
    color: "red-500",
    icon: logo7,
    graph: downtrendGraph,
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    price: "$20.75",
    change: "-10.75%",
    trend: "down",
    color: "red-500",
    icon: logo8,
    graph: downtrendGraph,
  },
  {
    name: "ChainLink",
    symbol: "LINK",
    price: "$96,500.11",
    change: "11.4%",
    trend: "up",
    color: "green-500",
    icon: logo9,
    graph: uptrendGraph,
  },
  {
    name: "Toncoin",
    symbol: "TON",
    price: "$1,800.25",
    change: "-2.4%",
    trend: "down",
    color: "red-500",
    icon: logo10,
    graph: downtrendGraph,
  },
  {
    name: "SUI",
    symbol: "SUI",
    price: "$0.50",
    change: "5.9%",
    trend: "up",
    color: "green-500",
    icon: logo11,
    graph: uptrendGraph,
  },
  {
    name: "Stellar",
    symbol: "XLM",
    price: "$20.75",
    change: "8.0%",
    trend: "up",
    color: "green-500",
    icon: logo12,
    graph: uptrendGraph,
  },
];

const CryptoGrid = () => {
  const [isShare,setIsShare]=useState(false)
  return (
   <> <div className="p-6 bg-[#1F1F1F] min-h-screen">
      <div className="flex space-x-4 mb-6 text-xl font-semibold text-white">
        <Link to="/">
          {" "}
          <span className="hover:text-green-400 hover:border-b-2 hover:border-green-400 cursor-pointer">
            Mega Coins
          </span>
        </Link>{" "}
        <Link to="/">
          {" "}
          <span className="hover:text-green-400 hover:border-b-2 hover:border-green-400 cursor-pointer">
            Mega Coins
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cryptoData.map((coin, index) => (
          <div key={index} className="bg-[#141415] p-4 rounded-lg shadow-md">
            {/* Coin Title */}
            <div className="flex items-center space-x-2 text-white font-semibold">
              <img src={coin.icon} alt={coin.name} className="w-8 h-8" />
              <div className="flex justify-between w-full">
                <div>
                  <span>
                    {coin.name} ({coin.symbol})
                  </span>
                  <div className="text-gray-400 mt-1">{coin.price}</div>
                </div>
               
                <button className=" ">
                  <Link to="/" className="font-bold">
                  <img src={share} alt="" />
                  </Link>
                </button>
              </div>
            </div>

            {/* Price & Change */}

            {/* Graph */}
            <img
              src={coin.graph}
              alt="trend graph"
              className="  md:h-32 lg:h-44 rounded-lg"
            />

            {/* Predict Button */}
            <button onClick={()=>setIsShare(true)} className="w-full bg-[#00A67E] text-white font-bold py-2 rounded-lg hover:bg-violet-700 duration-150">
             Predict Now
            </button>

            {/* Stats */}
            <div className="mt-2 flex justify-between text-gray-400 text-sm">
              <span className="flex items-center gap-1">
                <BsTrophy /> $12,509.22
              </span>
              <span className="flex gap-1 items-center">
                <FaRegComment className="" /> 256
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <PredictionCard visible={isShare}/>
    
    
    </>
  );
};

export default CryptoGrid;
