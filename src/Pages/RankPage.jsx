import React from "react";
import { useParams, Link } from "react-router-dom";

const RankPage = () => {
  const { filter } = useParams();
  const validFilters = ["all", "day", "week", "month"];
  const filterText = validFilters.includes(filter) ? filter : "All";

  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col justify-center items-center px-4 py-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        {filterText.toUpperCase()} RANK
      </h2>

      <p className="text-white mb-6 text-lg sm:text-xl">
        Displaying {filterText} rank results...
      </p>

      <Link to="/rank">
        <button className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white rounded-md transition duration-200 w-full max-w-[250px]">
          Back to Rank
        </button>
      </Link>
    </div>
  );
};

export default RankPage;
