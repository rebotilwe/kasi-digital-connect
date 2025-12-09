import React from 'react';
import './RoleOfSMEs.css';

const RoleOfSMEs = () => {
  return (
    <div className="smes-container">

      {/* Hero Section */}
      <section className="smes-hero">
        <h1>The Role of SMEs & Informal Traders in the Township Economy</h1>
        <p>
          SMEs and informal traders are the backbone of township economies,
          creating jobs, stimulating local spending, and driving community
          development. Kasi Digital Connect empowers them through digital tools,
          training, and partnership opportunities.
        </p>
      </section>

      {/* Why They Matter */}
      <section className="smes-section">
        <h2>Why SMEs & Informal Traders Matter</h2>
        <ul>
          <li><strong>Job Creation:</strong> They generate the majority of employment in townships.</li>
          <li><strong>Local Economic Growth:</strong> Their income circulates directly inside communities.</li>
          <li><strong>Innovation:</strong> Township entrepreneurs are adaptable and resourceful.</li>
          <li><strong>Market Accessibility:</strong> They supply essential goods and services where needed most.</li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="smes-section">
        <h2>Challenges They Face</h2>
        <ul>
          <li>Limited access to funding and capital</li>
          <li>Low digital literacy levels</li>
          <li>Lack of visibility beyond local markets</li>
          <li>Infrastructure and operational constraints</li>
          <li>Minimal formal support systems</li>
        </ul>
      </section>

      {/* Support */}
      <section className="smes-section">
        <h2>How KDC Supports Them</h2>
        <ul>
          <li>Digital skills training & workshops</li>
          <li>Tools for business formalisation</li>
          <li>Market access through networking & partnerships</li>
          <li>Technology adoption (branding, ecommerce, POS)</li>
          <li>Opportunities to connect with corporates & investors</li>
        </ul>
      </section>

      {/* Vision */}
      <section className="smes-impact">
        <h2>Our Impact Vision</h2>
        <p>
          KDC envisions a future where township businesses are digitally empowered,
          competitive, and positioned to scale sustainably in the modern digital economy.
        </p>
      </section>

    </div>
  );
};

export default RoleOfSMEs;
