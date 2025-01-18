import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsTrophy } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import share from "../assets/Dashboard/share.svg";
import PredictionCard from "../Pages/Predictionboard";

// Import Logos & Graphs
import logo1 from "../assets/Dashboard/bitcoin.png";
import logo2 from "../assets/Dashboard/eth.png";
import logo3 from "../assets/Dashboard/xrp.png";
import logo4 from "../assets/Dashboard/sol.png";
import logo5 from "../assets/Dashboard/bitcoin.png";
import logo6 from "../assets/Dashboard/cardano.png";
import logo7 from "../assets/Dashboard/tron.png";
import logo8 from "../assets/Dashboard/avalan.png";
import uptrendGraph from "../assets/Dashboard/graph1.svg";
import downtrendGraph from "../assets/Dashboard/graph2.svg";

// Sample Crypto Data with Category
// Sample Crypto Data with Category
const cryptoData = [
  // Mega Coins
  { name: "Bitcoin", symbol: "BTC", price: "$96,500.11", change: "8.6%", trend: "up", color: "green-500", icon: logo1, graph: uptrendGraph, category: "mega" },
  { name: "Ethereum", symbol: "ETH", price: "$1,800.25", change: "-2.4%", trend: "down", color: "red-500", icon: logo2, graph: downtrendGraph, category: "mega" },
  { name: "XRP", symbol: "XRP", price: "$0.50", change: "4.6%", trend: "up", color: "green-500", icon: logo3, graph: uptrendGraph, category: "mega" },
  { name: "Solana", symbol: "SOL", price: "$20.75", change: "0.45%", trend: "up", color: "green-500", icon: logo4, graph: uptrendGraph, category: "mega" },
  { name: "Polygon", symbol: "MATIC", price: "$1.20", change: "3.2%", trend: "up", color: "green-500", icon: logo6, graph: uptrendGraph, category: "mega" },
  { name: "Litecoin", symbol: "LTC", price: "$89.45", change: "-1.9%", trend: "down", color: "red-500", icon: logo7, graph: downtrendGraph, category: "mega" },
  { name: "Chainlink", symbol: "LINK", price: "$25.30", change: "2.1%", trend: "up", color: "green-500", icon: logo8, graph: uptrendGraph, category: "mega" },
  { name: "Cardano", symbol: "ADA", price: "$0.40", change: "-0.6%", trend: "down", color: "red-500", icon: logo6, graph: downtrendGraph, category: "mega" },
  { name: "Avalanche", symbol: "AVAX", price: "$30.20", change: "5.7%", trend: "up", color: "green-500", icon: logo8, graph: uptrendGraph, category: "mega" },
  { name: "Cosmos", symbol: "ATOM", price: "$15.00", change: "-3.1%", trend: "down", color: "red-500", icon: logo2, graph: downtrendGraph, category: "mega" },
  { name: "Polkadot", symbol: "DOT", price: "$5.60", change: "1.4%", trend: "up", color: "green-500", icon: logo3, graph: uptrendGraph, category: "mega" },
  { name: "Stellar", symbol: "XLM", price: "$0.11", change: "-0.2%", trend: "down", color: "red-500", icon: logo4, graph: downtrendGraph, category: "mega" },

  // Meme Coins
  { name: "DogeCoin", symbol: "DOGE", price: "$0.089", change: "12.3%", trend: "up", color: "green-500", icon: logo5, graph: uptrendGraph, category: "meme" },
  { name: "Shiba Inu", symbol: "SHIB", price: "$0.000012", change: "-5.2%", trend: "down", color: "red-500", icon: logo6, graph: downtrendGraph, category: "meme" },
  { name: "PepeCoin", symbol: "PEPE", price: "$0.00021", change: "9.7%", trend: "up", color: "green-500", icon: logo7, graph: uptrendGraph, category: "meme" },
  { name: "Floki Inu", symbol: "FLOKI", price: "$0.00031", change: "-3.5%", trend: "down", color: "red-500", icon: logo8, graph: downtrendGraph, category: "meme" },
  { name: "Akita Inu", symbol: "AKITA", price: "$0.0000015", change: "8.1%", trend: "up", color: "green-500", icon: logo6, graph: uptrendGraph, category: "meme" },
  { name: "Kishu Inu", symbol: "KISHU", price: "$0.00000002", change: "-3.2%", trend: "down", color: "red-500", icon: logo7, graph: downtrendGraph, category: "meme" },
  { name: "SafeMoon", symbol: "SAFEMOON", price: "$0.000004", change: "10.9%", trend: "up", color: "green-500", icon: logo8, graph: uptrendGraph, category: "meme" },
  { name: "BabyDoge", symbol: "BABYDOGE", price: "$0.0000004", change: "-4.7%", trend: "down", color: "red-500", icon: logo5, graph: downtrendGraph, category: "meme" },
  { name: "Dogelon Mars", symbol: "ELON", price: "$0.0000001", change: "6.5%", trend: "up", color: "green-500", icon: logo1, graph: uptrendGraph, category: "meme" },
  { name: "Hoge Finance", symbol: "HOGE", price: "$0.00015", change: "-2.8%", trend: "down", color: "red-500", icon: logo2, graph: downtrendGraph, category: "meme" },
  { name: "Ryoshi Token", symbol: "RYOSHI", price: "$0.0000003", change: "4.2%", trend: "up", color: "green-500", icon: logo3, graph: uptrendGraph, category: "meme" },
  { name: "PooCoin", symbol: "POO", price: "$3.50", change: "-1.2%", trend: "down", color: "red-500", icon: logo4, graph: downtrendGraph, category: "meme" },
];


const CryptoGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("mega");
  const [isShare, setIsShare] = useState(false);

  // Filter data based on selected category
  const filteredCryptoData = cryptoData.filter(coin => coin.category === selectedCategory);

  return (
    <>
      <div className="p-6 bg-[#1F1F1F] min-h-screen">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6 text-xl font-semibold text-white">
          <button 
            className={` hover:border-b-2 hover:border-[#00A67E] cursor-pointer ${selectedCategory === "mega" ? "text-green-400 border-b-2 hover:border-[#00A67E] " : ""}`} 
            onClick={() => setSelectedCategory("mega")}
          >
            Mega Coins
          </button>
          <button 
            className={` hover:border-b-2 hover:border-[#00A67E] cursor-pointer ${selectedCategory === "meme" ? "text-green-400 border-b-2 hover:border-[#00A67E] " : ""}`} 
            onClick={() => setSelectedCategory("meme")}
          >
            Meme Coins
          </button>
        </div>

        {/* Crypto Cards Grid */}
        <div className="bg-[#141415] rounded-lg p-4 min-h-screen ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCryptoData.length > 0 ? (
              filteredCryptoData.map((coin, index) => (
                <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
                  {/* Coin Title */}
                  <div className="flex items-center space-x-2 text-white font-semibold">
                    <img src={coin.icon} alt={coin.name} className="w-8 h-8" />
                    <div className="flex justify-between w-full">
                      <div>
                        <span>{coin.name} ({coin.symbol})</span>
                        <div className="text-gray-400 font-light mt-1">{coin.price}</div>
                      </div>
                      <button>
                        <Link to="/" className="font-bold">
                          <img src={share} alt="Share" />
                        </Link>
                      </button>
                    </div>
                  </div>

                  {/* Graph */}
                  <img src={coin.graph} alt="trend graph" className="md:h-32 lg:h-44 rounded-lg" />

                  {/* Predict Button */}
                  <button
                    onClick={() => setIsShare(true)}
                    className="w-full bg-[#00A67E] text-white font-bold py-2 rounded-lg hover:bg-violet-500 duration-200"
                  >
                    Predict Now
                  </button>

                  {/* Stats */}
                  <div className="mt-2 flex justify-between text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <BsTrophy /> $12,509.22
                    </span>
                    <span className="flex gap-1 items-center">
                      <FaRegComment /> 256
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No data available for {selectedCategory}</p>
            )}
          </div>
        </div>
      </div>

      {/* Prediction Popup */}
      <PredictionCard visible={isShare} />
    </>
  );
};

export default CryptoGrid;
