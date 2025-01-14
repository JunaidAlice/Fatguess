import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const leaderboardData = [
  { id: 1, name: 'John Doe', amountWon: 23390, wins: 117, avatar: 'avatar1.png', notifications: 3 },
  { id: 2, name: 'Alex Smith', amountWon: 23390, wins: 95, avatar: 'avatar2.png', notifications: 1 },
  { id: 3, name: 'Emily Johnson', amountWon: 23390, wins: 102, avatar: 'avatar3.png', notifications: 4 },
  { id: 4, name: 'Michael Brown', amountWon: 23390, wins: 88, avatar: 'avatar4.png', notifications: 2 },
  { id: 5, name: 'Sarah Davis', amountWon: 23390, wins: 110, avatar: 'avatar5.png', notifications: 0 },
  { id: 6, name: 'David Wilson', amountWon: 23390, wins: 76, avatar: 'avatar6.png', notifications: 5 },
  { id: 7, name: 'Jessica Taylor', amountWon: 23390, wins: 99, avatar: 'avatar7.png', notifications: 0 },
];

const Leaderboard = () => {
  const [filter, setFilter] = useState('Week');

  return (
    <div className="bg-[#1A1A1A] min-h-screen flex justify-center items-center p-4">
      <div className="text-white p-6 rounded-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">LEADERBOARD</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 mb-6 flex-wrap">
          {['All', 'Day', 'Week', 'Month'].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-full transition-colors mb-2 duration-200 ${
                filter === option ? 'bg-green-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Leaderboard List */}
        <ul className="space-y-4">
          {leaderboardData.map((player) => (
            <li key={player.id} className="flex items-center p-4 border-b-[1px] border-gray-700 relative flex-wrap sm:flex-nowrap">
              
              {/* Avatar with Notification Badge */}
              <div className="relative w-16 h-16">
                <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full" />
                
                {/* Show Notification Counter only if notifications > 0 */}
                {player.notifications > 0 && (
                  <span
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#1A1A1A] 
                    animate-pulse transform transition duration-500 ease-out"
                  >
                    {player.notifications}
                  </span>
                )}
              </div>

              {/* Player Info */}
              <div className="flex-1 ml-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <span className="block text-lg font-semibold">{player.name}</span>
                  <span className="text-sm text-gray-400">${player.amountWon.toLocaleString()} won</span>
                </div>
              </div>

              {/* Wins (Moves Below on Small Screens) */}
              <span className="text-lg font-bold text-green-400 ml-2 sm:ml-4">{player.wins} wins</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
