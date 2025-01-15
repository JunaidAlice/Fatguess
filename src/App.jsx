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
import Comments from "./Pages/Coments"; 

import Predictionboard from "./Pages/Predictionboard";
import LandingPage from "./Components/Landingpage";
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};
const MainContent = () => {
  const location = useLocation();
   return (<>
    <div>
    <Navbar />
      <Routes>
          
        <Route path="/" element={<LandingPage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/predictionboard" element={<Predictionboard />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div></>
  );
};

export default App;
