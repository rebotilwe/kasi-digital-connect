import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Pages

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import RoleOfSMEs from "./pages/RoleOfSMEs/RoleOfSMEs";
import WhyWeStandOut from "./pages/WhyWeStandOut/WhyWeStandOut";

import Analysis from "./pages/Analysis/Analysis";
import Contact from "./pages/Contact/Contact";
import OurOffers from "./pages/OurOffers/OurOffers";
import Services from "./pages/Services/Services";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/smes" element={<RoleOfSMEs />} />
        <Route path="/offer" element={<OurOffers />} />
        <Route path="/standout" element={<WhyWeStandOut />} />
        <Route path="/services" element={<Services />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
