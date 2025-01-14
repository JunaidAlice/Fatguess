import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Activity from "./Pages/Activity";
import Rank from "./Pages/Rank";
import Comments from "./Pages/Coments"; // Fixed spelling
import Connect from "./Pages/Connect";
import LandingPage from "./components/LandingPage";
import Signup from './Pages/Signup'; // Fixed import
// import Dashboard from './components/Dashboard'; // Fixed import
import Predictionboard from './Pages/Predictionboard'; // Fixed import
import Share from './Pages/Share'

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
  const shouldHideNavbar = location.pathname === "/Connect" || location.pathname === "/Signup"|| location.pathname ==="/Predictionboard"||location.pathname==="/Share";

  return (
    <div>
      {/* Conditionally render Navbar based on pathname */}
      {!shouldHideNavbar && <Navbar />}
      {/* <Dashboard/>       */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/share" element={<Share/>}/>


        <Route path="/predictionboard" element={<Predictionboard />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
