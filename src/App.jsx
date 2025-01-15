import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Activity from "./Pages/Activity";
import Rank from "./Pages/Rank";
import RankPage from "./Pages/RankPage";
import Comments from "./Pages/Coments";
import Dashboard from "./Components/Dashboard";
import Predictionboard from "./Pages/Predictionboard";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="">
        {/* Navbar remains fixed across all pages */}
        <Navbar />
        
        {/* Main Content Area */}
        <div className="">
          <MainContent />
        </div>
      </div>
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  return (
    <div className=" mx-auto w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/predictionboard" element={<Predictionboard />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Rank Routes (Previously Leaderboard) */}
        <Route path="/rank" element={<Rank />} />
        <Route path="/rank/:filter" element={<RankPage />} />
      </Routes>
    </div>
  );
};

export default App;
