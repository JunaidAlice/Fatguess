import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Activity from "./Pages/Activity";
import Rank from "./Pages/Rank";
import Coments from "./Pages/Coments";

import LandingPage from "./Components/LandingPage";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* nav routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/comments" element={<Coments />} />
          {/* footer routes */}
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
