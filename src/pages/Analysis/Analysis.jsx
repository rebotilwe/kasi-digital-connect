import React from 'react'
import './Analysis.css'

const Analysis = () => {
  return (
    <div className="research-container">

      {/* Hero */}
      <section className="research-hero">
        <h1>Research & Literature Analysis</h1>
        <p>
          Kasi Digital Connect 2026 is guided by evidence-based insights aligned
          with national and international frameworks to support township
          entrepreneurship and digital adoption.
        </p>
      </section>

      {/* Sections */}
      <section className="research-section">
        <h2>Key Research Insights</h2>

        <div className="research-card">
          <h3>Empowering Township-Based Enterprises</h3>
          <ul>
            <li>SMEs and informal traders drive township economies.</li>
            <li>Supporting this sector expands economic inclusion.</li>
            <li>Research: Harvard Kennedy School (2024), UNIDO (2017).</li>
          </ul>
        </div>

        <div className="research-card">
          <h3>Job Creation & Local Value Chains</h3>
          <ul>
            <li>SMEs contribute to over 3 million jobs in South Africa.</li>
            <li>Digital tools strengthen supply chains and innovation.</li>
          </ul>
        </div>

        <div className="research-card">
          <h3>Bridging the Digital Divide</h3>
          <ul>
            <li>Township youth and SMEs are eager but need structured training.</li>
            <li>KDC provides mentorship and digital onboarding programs.</li>
          </ul>
        </div>

        <div className="research-card">
          <h3>Market Access & Growth</h3>
          <ul>
            <li>Digital platforms reduce entry barriers for SMEs.</li>
            <li>Online visibility improves competitiveness.</li>
          </ul>
        </div>
      </section>

      <section className="research-conclusion">
        <h2>Conclusion</h2>
        <p>
          Kasi Digital Connect is built on validated research, ensuring that
          our digital ecosystem supports growth, resilience, and innovation
          across township economies.
        </p>
      </section>

      <section className="research-references">
        <h2>References</h2>
        <ol>
          <li>Harvard Kennedy School (2024). Informal Economy Report.</li>
          <li>HSRC (2021). Innovation in Township Enterprises.</li>
          <li>UNIDO (2017). E-Commerce Development Report.</li>
        </ol>
      </section>

    </div>
  );
};

export default Analysis;
