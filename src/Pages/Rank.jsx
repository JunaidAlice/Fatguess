import React, { useState } from "react";
import avatar1 from "../assets/Leaderboard/img1.png";
import avatar2 from "../assets/Leaderboard/img2.png";
import avatar3 from "../assets/Leaderboard/img3.png";
import avatar4 from "../assets/Leaderboard/img4.png";
import avatar5 from "../assets/Leaderboard/img5.png";
import avatar6 from "../assets/Leaderboard/img26.png";
import avatar7 from "../assets/Leaderboard/img3.png";

const rankData = [
  { id: 1, name: "John Doe", amountWon: 23390, wins: 117, avatar: avatar1, notifications: 3, category: "all" },
  { id: 2, name: "Alex Smith", amountWon: 19000, wins: 95, avatar: avatar2, notifications: 1, category: "day" },
  { id: 3, name: "Emily Johnson", amountWon: 21000, wins: 102, avatar: avatar3, notifications: 4, category: "week" },
  { id: 4, name: "Michael Brown", amountWon: 15000, wins: 88, avatar: avatar4, notifications: 2, category: "month" },
  { id: 5, name: "Sarah Davis", amountWon: 22000, wins: 110, avatar: avatar5, notifications: 0, category: "all" },
  { id: 6, name: "David Wilson", amountWon: 13000, wins: 76, avatar: avatar6, notifications: 5, category: "week" },
  { id: 7, name: "Jessica Taylor", amountWon: 17500, wins: 99, avatar: avatar7, notifications: 0, category: "day" },
];

const Rank = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter leaderboard data based on selected category
  const filteredRankData =
    selectedCategory === "all"
      ? rankData
      : rankData.filter((player) => player.category === selectedCategory);

  return (
    <div className="bg-[#1A1A1A] min-h-screen flex justify-center items-center py-6">
      <div className="text-white p-6 rounded-lg w-full max-w-4xl">
      <h2 className="text-5xl font-extrabold tracking-tighter text-center mb-6">LEADERBOARD</h2>
 
 

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 mb-6 flex-wrap gap-3">
          {["all", "day", "week", "month"].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === option ? "bg-[#00A67E]  hover:bg-violet-500 duration-200" : "bg-gray-700 hover:bg-gray-600"
              } text-white transition duration-200 w-full sm:w-auto`}
              onClick={() => setSelectedCategory(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        {/* Rank List (Filtered) */}
        <ul className="space-y-4 min-h-screen">
          {filteredRankData.length > 0 ? (
            filteredRankData.map((player) => (
              <li
                key={player.id}
                className="flex flex-wrap sm:flex-nowrap items-center p-4 border-b-[1px] border-gray-700 relative"
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full" />
                  {player.notifications > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#1A1A1A] animate-pulse">
                      {player.notifications}
                    </span>
                  )}
                </div>
                <div className="flex-1 ml-4 text-center sm:text-left">
                  <span className="block text-lg font-semibold text-gray-200">{player.name}</span>
                </div>
                  <h1 className="text-xl font-bold text-gray-300 ">${player.amountWon.toLocaleString()} <span className="text-sm font-light">won</span></h1>
                <h1 className="text-xl font-bold text-gray-300 ml-2 sm:ml-4">{player.wins} <span className="text-sm font-light">wins</span> </h1>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-400">No data available for {selectedCategory}</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Rank;
