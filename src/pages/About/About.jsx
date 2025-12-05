import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Kasi Digital Connect</h1>
        <p>
          KasiConnect is a modern multi-service digital platform created to empower local communities
          by bridging the gap between traditional business and the digital economy. We provide
          innovative online solutions that connect buyers, sellers, service providers, and renters—
          enabling them to transact conveniently, confidently, and efficiently.
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

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become South Africa’s leading all-in-one digital marketplace that empowers communities by
          connecting buyers, sellers, and service providers through accessible, innovative, and inclusive technology.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a seamless, reliable, and user-friendly platform that enables individuals
          and businesses to transact anywhere, anytime. We aim to simplify how people buy, sell, offer
          services, and source rentals by integrating modern technology with a community-focused approach.
        </p>
      </section>

      {/* Core Values */}
      <section className="about-pillars">
        <h2>Our Core Values</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>Customer First</h3>
            <p>We prioritise user needs with convenience and reliability.</p>
          </div>
          <div className="pillar-card">
            <h3>Integrity</h3>
            <p>We operate with honesty, transparency, and accountability.</p>
          </div>
          <div className="pillar-card">
            <h3>Community Empowerment</h3>
            <p>We help township and local entrepreneurs access wider markets.</p>
          </div>
          <div className="pillar-card">
            <h3>Innovation</h3>
            <p>We continually improve our technology and services.</p>
          </div>
          <div className="pillar-card">
            <h3>Excellence & Commitment</h3>
            <p>We deliver high-quality service and trusted digital experiences.</p>
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="about-section">
        <h2>Team / Leadership</h2>
        <p>
          KasiConnect is led by a passionate team of innovators and community-focused entrepreneurs with
          expertise in e-commerce, tech development, marketing, and business empowerment.
        </p>
      </section>

      {/* Company History */}
      <section className="about-section">
        <h2>Company History</h2>
        <p>
          Founded in 2018, KasiConnect was built to address the lack of digital access for township and local
          businesses. The platform has grown into a multi-service marketplace integrating retail, service
          bookings, and rentals to support local economic development.
        </p>
      </section>
    </div>
  );
};

export default About;
