import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Kasi Digital Connect 2026</h1>
          <h3>Technology. Access. Growth.</h3>
          <p>
            A groundbreaking summit empowering 500 township-based SMEs and informal
            traders with digital tools, market access, skills development, and 
            long-term business support.
          </p>
          <button className="hero-btn">Learn More</button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h2>What is Kasi Digital Connect?</h2>
        <p>
          Kasi Digital Connect 2026 is a first-of-its-kind initiative designed to 
          accelerate digital transformation among township SMEs. With strategic 
          support from economic development partners, the summit bridges the 
          digital divide and connects entrepreneurs with technology, training, 
          mentorship, and access to markets.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Our Focus Areas</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>Digital Skills</h3>
            <p>Training on e-commerce, financial literacy, digital payments, and more.</p>
          </div>

          <div className="feature-card">
            <h3>Market Access</h3>
            <p>Connecting SMEs to Kasi360, corporate supply chains, and online buyers.</p>
          </div>

          <div className="feature-card">
            <h3>Enterprise Growth</h3>
            <p>One year of structured support for 200 adopted SMEs and informal traders.</p>
          </div>

          <div className="feature-card">
            <h3>Networking</h3>
            <p>Meet policymakers, investors, innovators, and industry leaders.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Be Part of the Movement</h2>
        <p>Join us in shaping the digital future of township economies.</p>
        <button className="cta-btn">Become a Sponsor</button>
      </section>
    </div>
  );
};

export default Home;
