import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Welcome to Kasi Digital Connect! We provide a wide range of digital
          services tailored for small businesses, freelancers, and township
          entrepreneurs. Our goal is to help you establish a strong digital
          presence and grow your brand online.
        </p>
      </section>

      <section className="services-main">
        <h2>What We Offer</h2>

        <ul className="services-list">
          <li className="service-item">Website Development</li>
          <li className="service-item">Social Media Management</li>
          <li className="service-item">Branding &amp; Graphic Design</li>
          <li className="service-item">Digital Marketing</li>
          <li className="service-item">E-commerce Setup</li>
          <li className="service-item">Business Email &amp; Hosting</li>
        </ul>

        <p className="services-footer-text">
          Whether you're starting out or scaling up, our team is ready to help
          bring your vision to life.
        </p>
      </section>
    </div>
  );
};

export default Services;
