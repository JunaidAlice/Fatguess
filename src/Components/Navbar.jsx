"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Trophy,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
  Activity,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Navbar/Logo.svg";
import Connect from "../Pages/Connect";
import empty from "../assets/Navbar/telescope.svg";
import { BiWallet } from "react-icons/bi";

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
    name: "Spanish",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
  {
    code: "pt",
    name: "Portuguese",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    code: "tr",
    name: "Turkish",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  },
  {
    code: "ru",
    name: "Russian",
    flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  },
  {
    code: "fr",
    name: "Français",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
];

const navLinks = [
  { name: "Activity", path: "/activity", icon: <Trophy /> },
  { name: "Ranks", path: "/rank", icon: <Activity /> },
  {
    name: "Comments",
    path: "/comments",
    icon: <MessageSquare />,
  },
];

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
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
  const close = () => setIsConnected(false);
  const open = () => setIsConnected(false);


  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-[#141414] px-4 md:px-16 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center  justify-start gap-[64px] flex-1">
            <img src={Logo} alt="Logo" />
            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1  relative">
              <div className="relative w-full lg:ml-0 ml-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search coin"
                  className="w-full md:w-[65%] bg-[#040404] text-white pl-10 pr-4 lg:pr-0 py-2 rounded-lg focus:outline-none border-[1px] border-gray-800"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                {filteredResults.length > 0 ? (
                  <div className="absolute top-12 left-0 w-full md:w-[65%]  text-white p-2 bg-[#141414]">
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
                ) : (
                  searchQuery && (
                    <div className="absolute top-12 left-0 w-full  md:w-[65%] rounded-md text-white p-2 bg-[#040404]">
                      <img src={empty} alt="empty" className="w-14 mx-auto" />
                      <p className="text-center">
                        Sorry, coin not supported yet...
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex lg:flex-1 justify-between">
            <div className="hidden lg:flex items-center  lg:w-[50%] justify-evenly  ">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path}>
                  <button className="flex flex-col items-center text-gray-400 hover:text-white">
                    {link.icon}
                    <span className=" lg:text-lg text-base mt-1 font-semibold ">
                      {link.name}
                    </span>
                  </button>
                </Link>
              ))}
            </div>
            {/* Language Selector */}
            <div className="flex gap-3  lg:mr-0 mr-8">
              <div className="relative  my-auto md:block hidden border-gray-800 rounded-md border-[1px]">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center space-x-1 rounded-md bg-[#040404] px-2 py-2 text-white  "
                >
                  <img
                    src={selectedLanguage.flag}
                    alt="Lang Flag"
                    className="w-5 h-5 rounded-full "
                  />
                  <ChevronDown className="w-4 h-4 " />
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute top-12  left-0 bg-[#040404] text-white w-44 rounded-lg shadow-lg ">
                    {languages.map((language) => (
                      <>
                        <button
                          key={language.code}
                          onClick={() => selectLanguage(language)}
                          className="flex items-center justify-between px-4 py-2 w-full hover:bg-gray-800"
                        >
                          <div className="flex items-center space-x-2">
                            <img
                              src={language.flag}
                              alt={language.name}
                              className="w-5 h-5 rounded-full"
                            />
                            <div className="flex gap-5">
                              {language.name}
                              <span>
                                {" "}
                                {selectedLanguage.code === language.code && (
                                  <span className="text-green-500 font-bold">
                                    <Check />
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                        </button>
                        <div className="border-[1px] border-gray-700 w-[90%] mx-auto "></div>
                      </>
                    ))}
                  </div>
                )}
              </div>

              {/* Connect Wallet */}

              <button
                onClick={() => setIsConnected(true)}
                className="bg-[#00A67E] text-white px-4 rounded-lg lg:block hidden hover:bg-violet-500 duration-200"
              >
                Connect Wallet
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden ">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-[#040404] rounded-lg"
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
          <div className="lg:hidden mt-4 pb-4 ">
            <div className="relative mb-4 md:hidden">
              <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search coin"
                className="w-full text-white pl-10 pr-4 py-2 rounded-lg bg-[#040404] focus:outline-none border-[1px] border-gray-800 "
                value={searchQuery}
                onChange={handleSearch}
              />
              {filteredResults.length > 0 ? (
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
              ) : (
                searchQuery && (
                  <div className="absolute top-12 left-0 w-full md:w-[65%] rounded-md text-white p-2 bg-[#040404]">
                    <img src={empty} alt="empty" className="w-14 mx-auto" />
                    <p className="text-center">
                      Sorry, coin not supported yet...
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="space-y-4">
              <Link to="/activity">
                <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-[#1f1f1f]">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">Activity</span>
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
                  <span className="font-semibold ">Ranks</span>
                </button>
              </Link>
              <Link to="/comments">
                <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-[#1f1f1f]">
                  <MessageSquare className="w-5 h-7 font-bold" />
                  <span className="font-semibold">Comments</span>
                </button>
              </Link>
              <button
                onClick={() => setIsConnected(true)}
                className=" text-gray-400  hover:text-white pr-4 pl-2 gap-3  rounded-lg flex items-center font-bold"
              >
                <BiWallet size={22} />
                Connect Wallet
              </button>
              <div className="relative  md:hidden">
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center justify-between text-white w-full px-2 py-2 rounded-lg hover:bg-[#1f1f1f]"
                >
                  <div className="flex items-center space-x-3 ">
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
                         <div className="flex gap-20">
                              {language.name}
                              <span>
                                {" "}
                                {selectedLanguage.code === language.code && (
                                  <span className="text-green-500 font-bold">
                                      
                                      <Check/>

                                  </span>
                                )}
                              </span>
                            </div>
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
      {isConnected && <Connect close={close} />}
    </>
  );
}
