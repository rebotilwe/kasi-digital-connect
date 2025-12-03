import React from 'react'
import './RoleOfSMEs.css'

const RoleOfSMEs = () => {
 return (
    <div className="smes-container">

      {/* Hero Section */}
      <section className="smes-hero">
        <h1>The Role of SMEs & Informal Traders in the Township Economy</h1>
        <p>
          SMEs and informal traders are the backbone of township economies,
          creating jobs, stimulating local spending, and driving community
          development. Kasi Digital Connect recognises their essential role and
          aims to empower them through digital tools, training, and partnership
          opportunities.
        </p>
      </section>

      {/* Why They Matter */}
      <section className="smes-section">
        <h2>Why SMEs & Informal Traders Matter</h2>
        <ul>
          <li><strong>Job Creation & Local Economic Growth:</strong> Small and informal businesses generate the majority of employment in townships.</li>
          <li><strong>Community Development:</strong> SMEs reinvest locally, strengthening the township ecosystem.</li>
          <li><strong>Innovation & Adaptability:</strong> Township entrepreneurs are highly resourceful and quick to adopt new models.</li>
          <li><strong>Market Accessibility:</strong> They connect essential goods and services directly to local communities.</li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="smes-section">
        <h2>Challenges They Face</h2>
        <ul>
          <li>Limited access to capital and funding</li>
          <li>Low digital literacy and technology adoption</li>
          <li>Poor visibility and limited access to broader markets</li>
          <li>Infrastructure limitations affecting operations</li>
          <li>Lack of formal support systems</li>
        </ul>
      </section>

      {/* How KDC Supports Them */}
      <section className="smes-section">
        <h2>How KDC Supports SMEs & Informal Traders</h2>
        <ul>
          <li>Digital training & skills development</li>
          <li>Tools for business formalisation</li>
          <li>Market access through networking & partnerships</li>
          <li>Technology adoption support (POS, ecommerce, branding)</li>
          <li>Opportunities to connect with corporates, investors, and suppliers</li>
        </ul>
      </section>

      {/* Impact Vision */}
      <section className="smes-impact">
        <h2>Our Impact Vision</h2>
        <p>
          KDC aims to build a future where township businesses are digitally
          empowered, competitive, and able to scale sustainably within the
          digital economy.
        </p>
      </section>

    </div>
  );
};

export default RoleOfSMEs
