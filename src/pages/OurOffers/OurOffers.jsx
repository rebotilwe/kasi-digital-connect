import React from 'react';
import './OurOffers.css';

const OurOffers = () => {
  return (
    <div className="offer-container">

      {/* Hero Section */}
      <section className="offer-hero">
        <h1>What We Offer</h1>
        <p>
          Kasi Digital Connect empowers township entrepreneurs by connecting SMEs
          with opportunities, providing training, technology solutions, and partnerships
          that support digital transformation.
        </p>
      </section>

      {/* Offerings Section */}
      <section className="offer-grid">

        <div className="offer-card">
          <h3>Digital Skills & Training</h3>
          <p>Workshops and masterclasses focused on digital literacy and online tools.</p>
        </div>

        <div className="offer-card">
          <h3>Business Support & Formalisation</h3>
          <p>Registration, compliance, branding, and essential business tools.</p>
        </div>

        <div className="offer-card">
          <h3>Technology Solutions</h3>
          <p>POS systems, ecommerce platforms, and digital marketing support.</p>
        </div>

        <div className="offer-card">
          <h3>Market Access & Networking</h3>
          <p>Connect with investors, buyers, corporates, and supply chains.</p>
        </div>

        <div className="offer-card">
          <h3>Exhibitions & Showcases</h3>
          <p>Platforms for innovators to showcase their work and gain exposure.</p>
        </div>

        <div className="offer-card">
          <h3>Funding & Investment Linkages</h3>
          <p>Connecting entrepreneurs to funders and financial institutions.</p>
        </div>

        <div className="offer-card">
          <h3>Community Empowerment Initiatives</h3>
          <p>Programs promoting digital inclusion for youth, women, and entrepreneurs.</p>
        </div>

      </section>

      {/* Closing */}
      <section className="offer-impact">
        <h2>Empowering Township Businesses</h2>
        <p>
          KDC equips township entrepreneurs with the digital tools, confidence, and opportunities
          they need to thrive and scale in today’s digital-first economy.
        </p>
      </section>

    </div>
  );
};

export default OurOffers;
