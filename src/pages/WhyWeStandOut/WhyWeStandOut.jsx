import React from 'react'
import './WhyWeStandOut.css'

const WhyWeStandOut = () => {
  return (
    <div className="stands-container">

      {/* Hero Section */}
      <section className="stands-hero">
        <h1>Why KDC Stands Out</h1>
        <p>
          Kasi Digital Connect is not just another summit — it's a practical, high-impact
          intervention designed to empower township-based SMEs with tools, opportunities,
          and long-term support.
        </p>
      </section>

      {/* Features Grid */}
      <section className="stands-grid">

        <div className="stands-card">
          <h3>Innovative & Practical</h3>
          <p>
            Unlike traditional business summits, KDC delivers real-world solutions including
            hands-on training, digital tools, and continuous business support.
          </p>
        </div>

        <div className="stands-card">
          <h3>High-Impact Partnerships</h3>
          <p>
            Backed by partners such as Economic Development Gauteng Province, SEDFA,
            Microsoft, and the Black Business Council — ensuring sustainability and scale.
          </p>
        </div>

        <div className="stands-card">
          <h3>Focus on Township Growth</h3>
          <p>
            Direct support for underserved township entrepreneurs, addressing digital access,
            market entry, and business formalisation challenges.
          </p>
        </div>

        <div className="stands-card">
          <h3>Digital Platform Integration</h3>
          <p>
            Seamless integration with the Kasi360 platform for payments, e-commerce,
            business tools, and long-term enterprise development.
          </p>
        </div>

        <div className="stands-card">
          <h3>Long-Term Mentorship</h3>
          <p>
            200 SMEs receive one year of structured support for real, measurable, long-term growth.
          </p>
        </div>

        <div className="stands-card">
          <h3>Evidence-Based Approach</h3>
          <p>
            Supported by leading research institutions, aligning with national priorities and the
            African Union 2030 Digital Strategy.
          </p>
        </div>

      </section>

      {/* Closing */}
      <section className="stands-impact">
        <h2>Innovation. Access. Transformation.</h2>
        <p>
          KDC stands out because it bridges the digital divide and enables township entrepreneurs
          to grow, compete, and succeed in the digital economy.
        </p>
      </section>

    </div>
  );
};

export default WhyWeStandOut
