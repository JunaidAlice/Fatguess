"use client";

import React, { useState } from "react";
import {
  Globe,
  Search,
  Trophy,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20154958-XqM8nCtfmPWiO6Th3fUhxNljUHcgDH.png",
  },
  { code: "es", name: "Español", flag: "/flags/es.png" },
  { code: "fr", name: "Français", flag: "/flags/fr.png" },
  { code: "de", name: "Deutsch", flag: "/flags/de.png" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
    console.log(`Language changed to ${language.name}`);
  };

  return (
    <nav className="bg-black px-4 py-6">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-white" />
          <span className="text-white font-bold text-xl">FATGUESS</span>
        </div>

        {/* Search Section - Hidden on Mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-md mr-20">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search coin"
              className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/activity">
            <button className="flex flex-col items-center text-gray-400 hover:text-white">
              <Trophy className="w-5 h-5" />
              <span className="text-xs mt-1 font-semibold">Activity</span>
            </button>
          </Link>

          <Link to="/rank">
            <button className="flex flex-col items-center text-gray-400 hover:text-white">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 20h20M5 20V8m7 12V4m7 16v-8" />
              </svg>
              <span className="text-xs mt-1 font-semibold">Ranks</span>
            </button>
          </Link>

          <Link to="/comments">
            <button className="flex flex-col items-center text-gray-400 hover:text-white">
              <MessageSquare className="w-5 h-5" />
              <span className="text-xs mt-1 font-semibold">Comments</span>
            </button>
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center space-x-1 text-white"
            >
              <img
                src={selectedLanguage.flag}
                alt={`${selectedLanguage.name} Flag`}
                width={20}
                height={15}
                className="rounded"
              />
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
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

          {/* Connect Wallet Button */}
          
    <Link to="#Connect" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
      Connect Wallet
    </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
             <Link to="#Connect"> Connect Wallet </Link>
            </button>
         
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search coin"
              className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>

          {/* Mobile Navigation Items */}
          <div className="space-y-4">
            <Link to="/activity">
              <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-gray-800">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Activity</span>
              </button>
            </Link>
            <Link to="/rank">
              <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-gray-800">
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
              <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-2 py-2 rounded-lg hover:bg-gray-800">
                <MessageSquare className="w-6 h-7 font-bold" />
                <span className="font-semibold">Comments</span>
              </button>
            </Link>
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center justify-between text-white w-full px-2 py-2 rounded-lg hover:bg-gray-800"
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
                <div className="mt-2 w-full rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
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
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white w-full"
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
  );
}
