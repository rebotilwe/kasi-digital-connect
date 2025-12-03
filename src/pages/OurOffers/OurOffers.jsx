import React from 'react'
import './OurOffers.css'

const OurOffers = () => {

  return (
    <div className="offer-container">

      {/* Hero Section */}
      <section className="offer-hero">
        <h1>What We Offer</h1>
        <p>
          Kasi Digital Connect provides a platform that empowers township entrepreneurs,
          connects SMEs with opportunities, and accelerates digital transformation through
          training, technology, and partnerships.
        </p>
      </section>

      {/* Offerings Section */}
      <section className="offer-grid">

        <div className="offer-card">
          <h3>Digital Skills & Training</h3>
          <p>
            Workshops and masterclasses focused on digital literacy, online business tools,
            and technology adoption for SMEs and informal traders.
          </p>
        </div>

        <div className="offer-card">
          <h3>Business Support & Formalisation</h3>
          <p>
            Assistance with compliance, business registration, branding, and tools that help
            township businesses operate professionally.
          </p>
        </div>

        <div className="offer-card">
          <h3>Technology Solutions</h3>
          <p>
            Access to digital tools such as POS systems, e-commerce platforms, mobile apps,
            and digital marketing solutions.
          </p>
        </div>

        <div className="offer-card">
          <h3>Market Access & Networking</h3>
          <p>
            Opportunities to connect with investors, corporate buyers, suppliers, and
            support organisations.
          </p>
        </div>

        <div className="offer-card">
          <h3>Exhibitions & Showcases</h3>
          <p>
            A platform for SMEs, youth innovators, and tech creators to exhibit their work
            and gain exposure.
          </p>
        </div>

        <div className="offer-card">
          <h3>Funding & Investment Linkages</h3>
          <p>
            Connecting businesses to funders, sponsors, and financial institutions to boost
            township entrepreneurship.
          </p>
        </div>

        <div className="offer-card">
          <h3>Community Empowerment Initiatives</h3>
          <p>
            Programs that uplift youth, women, and entrepreneurs by promoting digital inclusion.
          </p>
        </div>

      </section>

      {/* Closing */}
      <section className="offer-impact">
        <h2>Empowering Township Businesses</h2>
        <p>
          KDC aims to build a future where township entrepreneurs have the digital tools,
          confidence, and opportunities to compete and thrive in the modern economy.
        </p>
      </section>

    </div>
  );
};


export default OurOffers
