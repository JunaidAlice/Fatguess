import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Activity from "./Pages/Activity";
import Rank from "./Pages/Rank";
import Comments from "./Pages/Coments"; // Fixed spelling

import LandingPage from "./components/LandingPage";

import Predictionboard from "./Pages/Predictionboard"; // Fixed import

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  // Hide Navbar on /connect and /signup

  return (
    <div>
      {/* Conditionally render Navbar based on pathname */}
      <Navbar />
      {/* <Dashboard/>       */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/comments" element={<Comments />} />

        <Route path="/predictionboard" element={<Predictionboard />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
