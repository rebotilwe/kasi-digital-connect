import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo2} alt="KDC Logo" className="nav-logo" />
        </Link>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/smes" onClick={handleLinkClick}>SME Role</Link></li>
        <li><Link to="/offer" onClick={handleLinkClick}>What We Offer</Link></li>
        <li><Link to="/standout" onClick={handleLinkClick}>Why KDC Stands Out</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
        <li><Link to="/analysis" onClick={handleLinkClick}>Research</Link></li>
        <li>
          <Link
            to="/contact"
            className={isOpen ? "mobile-contact" : "btn-contact"}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
