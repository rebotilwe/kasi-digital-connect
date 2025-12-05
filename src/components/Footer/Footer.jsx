import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/smes">SME Role</Link></li>
            <li><Link to="/offer">What We Offer</Link></li>
            <li><Link to="/standout">Why KDC Stands Out</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/analysis">Research</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Address: 48 Fountains, 28 Graham Road, Lombardy Estate, Pretoria, 0081</p>
          <p>Email: <a href="mailto:info@kasiconnect.co.za">info@kasiconnect.co.za</a></p>
          <p>Phone: +27 12 345 6789</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{" "}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Kasi Digital Connect. All rights reserved. | Developed by Afribiz Connect
        </p>
      </div>
    </footer>
  );
};

export default Footer;
