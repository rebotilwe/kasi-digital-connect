import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Kasi Digital Connect 2026</h1>
        <p>
          Kasi Digital Connect (KDC) 2026 is a groundbreaking event designed to
          accelerate digital inclusion, empower township entrepreneurs, and
          position local SMEs for growth within South Africa’s evolving digital
          economy.
        </p>
      </section>

      {/* Video Section */}
      <section className="about-video">
        <h2>Watch Our Intro Video</h2>
        <video controls width="100%" poster="/images/video-poster.jpg">
          <source src="/videos/kasi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to bridge the digital divide by equipping township
          communities with the tools, knowledge, and opportunities they need to
          thrive in a technology-driven future.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To create a sustainable, digitally empowered township economy where
          every entrepreneur has equal access to digital infrastructure, skills,
          and market opportunities.
        </p>
      </section>

      {/* Objectives */}
      <section className="about-pillars">
        <h2>Our Key Objectives</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>Digital Skills Empowerment</h3>
            <p>
              Providing digital literacy, technology workshops, and hands-on
              training for SMEs and youth.
            </p>
          </div>
          <div className="pillar-card">
            <h3>Business & Market Access</h3>
            <p>
              Connecting township entrepreneurs with investors, corporate buyers,
              and support organisations.
            </p>
          </div>
          <div className="pillar-card">
            <h3>Technology Adoption</h3>
            <p>
              Introducing modern tools, payment systems, eCommerce solutions, and
              digital marketing for businesses.
            </p>
          </div>
          <div className="pillar-card">
            <h3>Community Upliftment & Inclusion</h3>
            <p>
              Ensuring that every part of the township ecosystem benefits from the
              digital revolution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
