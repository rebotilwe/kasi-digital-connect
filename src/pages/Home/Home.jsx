import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

// Images

import web from "../../assets/web.jpeg";
import marketing from "../../assets/marketing.jpeg";
import brand from "../../assets/brand.jpeg";
import team3 from "../../assets/team3.jpg";

import CTA from "../../assets/CTA.jpeg";

import team5 from "../../assets/team5.avif";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="hero">
  <div className="hero-bg-wrapper">
    <img src={team5} alt="Hero Background" className="hero-bg" />
  </div>
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>Kasi Digital Connect</h1>
    <p>
      A Corporate digital platform empowering communities through technology,
      innovation, and accessible digital services.
    </p>
    <button className="primary-btn" onClick={() => navigate("/about")}>
      Learn More
    </button>
  </div>
</section>



      {/* SERVICES SECTION */}
      <section className="services">
        <h2 className="section-title">Our Core Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <img src={web} alt="Digital Skills Training" />
            <h3>Digital Skills Training</h3>
            <p>Empowering SMEs with essential digital, financial, and e-commerce skills.</p>
          </div>

          <div className="service-card">
            <img src={marketing} alt="Market Access" />
            <h3>Market Access</h3>
            <p>Connecting businesses to new opportunities, buyers, and ecosystems.</p>
          </div>

          <div className="service-card">
            <img src={brand} alt="Enterprise Growth" />
            <h3>Enterprise Growth</h3>
            <p>Structured support for 200+ SMEs and informal traders.</p>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="value-section">
        <div className="value-image">
          <img src={team3} alt="Teamwork" />
        </div>

        <div className="value-content">
          <h2>Why Partner With Us?</h2>
          <p>
            We are committed to driving digital transformation in township economies,
            building sustainable businesses, and accelerating technology adoption.
          </p>
          <ul>
            <li>Corporate-approved professionalism</li>
            <li>Trusted by SMEs and local communities</li>
            <li>Structured and measurable impact</li>
            <li>Community-focused development</li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
{/* CTA SECTION */}
<section className="cta-section-split">
  <div className="cta-image">
    <img src={CTA} alt="Call to Action" />
  </div>
  <div className="cta-text">
    <h2>Be Part of the Movement</h2>
    <p>Join us in shaping the digital future of community-driven businesses.</p>
    <button className="primary-btn" onClick={() => navigate("/contact")}>
      Get Involved
    </button>
  </div>
</section>



    </div>
  );
};

export default Home;
