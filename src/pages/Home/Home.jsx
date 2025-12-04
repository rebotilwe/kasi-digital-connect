import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

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
          <button className="hero-btn" onClick={goToAbout}>
            Learn More
          </button>
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

      {/* SPONSORSHIP SECTION */}
      <section className="sponsorship-section">
        <h2>Sponsorship Opportunities</h2>
        <p className="sponsorship-intro">
          Partner with us in driving economic transformation through digital empowerment!
        </p>

        <div className="sponsorship-cards">
          <div className="sponsorship-card">
            <h3>Diamond</h3>
            <p className="investment">R 1,200,000 – R 800,000 (€60,000 – €40,000)</p>
            <p className="benefits">
              Keynote speaking slot, branding across event marketing, prime exhibition space, media coverage, and contribution to National Imperatives.
            </p>
          </div>

          <div className="sponsorship-card">
            <h3>Gold</h3>
            <p className="investment">R 650,000 – R 450,000 (€32,500 – €22,500)</p>
            <p className="benefits">
              Panel discussion participation, co-branded workshops, logo placement on event materials and contribution to National Imperatives.
            </p>
          </div>

          <div className="sponsorship-card">
            <h3>Silver</h3>
            <p className="investment">R 350,000 – R 200,000 (€17,500 – €10,000)</p>
            <p className="benefits">
              Exhibition space, branding on select event materials, social media features and contribution to National Imperatives.
            </p>
          </div>

          <div className="sponsorship-card">
            <h3>Bronze</h3>
            <p className="investment">R 150,000 – R 100,000 (€7,500 – €5,000)</p>
            <p className="benefits">
              Logo on event banners, social media mentions, brand visibility on website and contribution to National Imperatives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Be Part of the Movement</h2>
        <p>Join us in shaping the digital future of township economies.</p>
        <button className="cta-btn" onClick={goToAbout}>Get Involved</button>
      </section>
    </div>
  );
};

export default Home;
