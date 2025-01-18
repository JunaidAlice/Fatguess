import React from "react";

// Sample data with avatar image URLs for users
const activities = [
  {
    id: 1,
    user: "Maria",
    amount: "$288.29",
    pair: "BTC/USDT",
    time: "45 minutes ago",
    icon: "🔴",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    user: "David",
    amount: "$288.29",
    pair: "DOGE",
    time: "1 hour ago",
    icon: "🐶",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    user: "David",
    amount: "$288.29",
    pair: "DOGE",
    time: "1 hour ago",
    icon: "🐶",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 4,
    user: "Emma",
    amount: "$288.29",
    pair: "BTC/USDT",
    time: "45 minutes ago",
    icon: "🟣",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,
    user: "Emma",
    amount: "$288.29",
    pair: "BTC/USDT",
    time: "45 minutes ago",
    icon: "🟣",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 6,
    user: "David",
    amount: "$288.29",
    pair: "DOGE",
    time: "1 hour ago",
    icon: "🟠",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 7,
    user: "David",
    amount: "$288.29",
    pair: "DOGE",
    time: "1 hour ago",
    icon: "🟠",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 8,
    user: "Emma",
    amount: "$288.29",
    pair: "BTC/USDT",
    time: "45 minutes ago",
    icon: "🟣",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 9,
    user: "Emma",
    amount: "$288.29",
    pair: "BTC/USDT",
    time: "45 minutes ago",
    icon: "🟣",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 10,
    user: "David",
    amount: "$288.29",
    pair: "DOGE",
    time: "1 hour ago",
    icon: "⚫",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-[#1F1F1F] py-6">
      <div className="text-white p-4 md:p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-5xl font-extrabold text-center tracking-tighter mb-6 uppercase">Acticity</h2>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-wrap justify-between items-center border-b-[1px] border-b-gray-600 p-4"
            >
              {/* Profile Picture */}
              <div className="flex items-center gap-3">
                <img
                  src={activity.avatar}
                  alt={activity.user}
                  className="w-10 h-10 rounded-full border-2 border-gray-600"
                />
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-50 gap-2 sm:gap-4">
                  <span className="font-bold text-lg">{activity.user}</span>
                  <span className="font-normal text-sm sm:text-base">
                    Predicted {activity.amount} on {activity.pair}
                  </span>
                </div>
              </div>
              <span className="text-gray-400 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
