import React from 'react';
import './WhyWeStandOut.css';

const WhyWeStandOut = () => {
  return (
    <div className="stands-container">

      {/* Hero Section */}
      <section className="stands-hero">
        <h1>Why KDC Stands Out</h1>
        <p>
          Kasi Digital Connect empowers township-based SMEs with practical tools, opportunities,
          and long-term support to drive sustainable growth.
        </p>
      </section>

      {/* Features Grid */}
      <section className="stands-grid">

        <div className="stands-card">
          <h3>Innovative & Practical</h3>
          <p>Hands-on training, digital tools, and continuous business support.</p>
        </div>

        <div className="stands-card">
          <h3>High-Impact Partnerships</h3>
          <p>Backed by trusted partners to ensure scalability and sustainability.</p>
        </div>

        <div className="stands-card">
          <h3>Focus on Township Growth</h3>
          <p>Direct support for underserved entrepreneurs with digital and market access.</p>
        </div>

        <div className="stands-card">
          <h3>Digital Platform Integration</h3>
          <p>Seamless integration with Kasi360 for payments, e-commerce, and business tools.</p>
        </div>

        <div className="stands-card">
          <h3>Long-Term Mentorship</h3>
          <p>Structured support for SMEs to achieve measurable long-term growth.</p>
        </div>

        <div className="stands-card">
          <h3>Evidence-Based Approach</h3>
          <p>Aligned with research and national priorities for digital and enterprise growth.</p>
        </div>

      </section>

      {/* Closing */}
      <section className="stands-impact">
        <h2>Innovation. Access. Transformation.</h2>
        <p>
          KDC bridges the digital divide, helping township entrepreneurs compete and succeed
          in the modern economy.
        </p>
      </section>

    </div>
  );
};

export default WhyWeStandOut;
