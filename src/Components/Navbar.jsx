"use client";

import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.svg";
import Connect from "../Pages/Connect";

// Sample crypto data with CoinGecko IDs
const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    id: "bitcoin",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    id: "ethereum",
  },
  {
    name: "Solana",
    symbol: "SOL",
    image: "https://cryptologos.cc/logos/solana-sol-logo.png",
    id: "solana",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    id: "cardano",
  },
];

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    code: "es",
    name: "Español",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
  {
    code: "fr",
    name: "Français",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
];

const navLinks = [
  { name: "Activity", path: "/activity" },
  { name: "Ranks", path: "/rank" },
  {
    name: "Comments",
    path: "/comments",
  },
];

export default function Navbar() {
  const [isConnected, setConnected] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const ids = cryptoData.map((crypto) => crypto.id).join(",");
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
        );
        const data = await response.json();
        setCryptoPrices(data);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    }

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    setFilteredResults(
      query
        ? cryptoData.filter(
            (crypto) =>
              crypto.name.toLowerCase().includes(query) ||
              crypto.symbol.toLowerCase().includes(query)
          )
        : []
    );
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-black px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mr-20 relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search coin"
                className="w-full bg-black text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none border-[1px] border-gray-800"
                value={searchQuery}
                onChange={handleSearch}
              />
              {filteredResults.length > 0 && (
                <div className="absolute top-12 left-0 w-full text-white p-2 bg-[#141414]">
                  {filteredResults.map((crypto) => (
                    <Link
                      key={crypto.symbol}
                      to={`/crypto/${crypto.symbol.toLowerCase()}`}
                      className="flex items-center justify-between px-4 py-2 border-b border-gray-700 font-bold"
                      onClick={() => setSearchQuery("")}
                    >
                      <div className="flex items-center">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-6 h-6 mr-3 rounded-full"
                        />
                        {crypto.name} ({crypto.symbol})
                      </div>
                      <span className="text-white">
                        $
                        {cryptoPrices[crypto.id]?.usd?.toLocaleString() ||
                          "N/A"}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}>
                <button className="flex flex-col items-center text-gray-400 hover:text-white">
                  {link.icon}
                  <span className="text-xs mt-1 font-semibold">
                    {link.name}
                  </span>
                </button>
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-1 text-white"
              >
                <img
                  src={selectedLanguage.flag}
                  alt="Lang Flag"
                  className="w-5 h-5 rounded-full"
                />
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-10 left-0 bg-[#1f1f1f] text-white w-32 rounded-lg shadow-lg">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => selectLanguage(language)}
                      className="flex items-center space-x-2 px-4 py-2 w-full hover:bg-gray-800"
                    >
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-5 h-5 rounded-full"
                      />
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Connect Wallet */}

            <button
              onClick={() => setConnected(true)}
              className="bg-[#00A85C] text-white px-4 py-2 rounded-lg"
            >
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-gray-800 rounded-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 ">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search coin"
                className="w-full text-white pl-10 pr-4 py-2 rounded-lg bg-black focus:outline-none border-[1px] border-gray-800 "
                value={searchQuery}
                onChange={handleSearch}
              />
              {filteredResults.length > 0 && (
                <div className="absolute top-12 left-0 w-full text-white p-2 bg-[#141414]">
                  {filteredResults.map((crypto) => (
                    <Link
                      key={crypto.symbol}
                      to={`/crypto/${crypto.symbol.toLowerCase()}`}
                      className="flex items-center justify-between px-4 py-2 border-b border-gray-700 font-bold"
                      onClick={() => setSearchQuery("")}
                    >
                      <div className="flex items-center">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-6 h-6 mr-3 rounded-full"
                        />
                        {crypto.name} ({crypto.symbol})
                      </div>
                      <span className="text-white">
                        $
                        {cryptoPrices[crypto.id]?.usd?.toLocaleString() ||
                          "N/A"}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              ;
            </div>

            <div className="space-y-4">
              <Link to="/activity">
                <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-[#1f1f1f]">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold text-lg">Activity</span>
                </button>
              </Link>
              <Link to="/rank">
                <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-[#1f1f1f]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 20h20M5 20V8m7 12V4m7 16v-8" />
                  </svg>
                  <span className="font-semibold">Ranks</span>
                </button>
              </Link>
              <Link to="/comments">
                <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-[#1f1f1f]">
                  <MessageSquare className="w-5 h-7 font-bold" />
                  <span className="font-semibold">Comments</span>
                </button>
              </Link>
              <button
                onClick={() => setConnected(true)}
                className=" text-gray-400 hover:text-white px-4  rounded-lg"
              >
                Connect Wallet
              </button>
              <div className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center justify-between text-white w-full px-2 py-2 rounded-lg hover:bg-[#1f1f1f]"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedLanguage.flag}
                      alt={`${selectedLanguage.name} Flag`}
                      width={20}
                      height={15}
                      className="rounded"
                    />
                    <span>{selectedLanguage.name}</span>
                  </div>
                  <ChevronDown className="w-8 h-8" />
                </button>
                {isLanguageDropdownOpen && (
                  <div className="mt-2 w-full rounded-md shadow-lg bg-[#1f1f1f] ">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => selectLanguage(language)}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#141414] rounded-lg hover:text-white w-full"
                          role="menuitem"
                        >
                          <img
                            src={language.flag}
                            alt={`${language.name} Flag`}
                            width={20}
                            height={15}
                            className="rounded mr-2"
                          />
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <Connect visible={isConnected} />
    </>
  );
}
