import React from 'react'
import './Analysis.css'

const Analysis = () => {
  return (
    <div className="research-container">

      {/* Hero */}
      <section className="research-hero">
        <h1>Research & Literature Analysis</h1>
        <p>
          Kasi Digital Connect 2026 is built on solid research and evidence-based insights. 
          Our program aligns with national and international studies on digital adoption, 
          SME growth, and township entrepreneurship to ensure high-impact results.
        </p>
      </section>

      {/* Research Insights */}
      <section className="research-section">
        <h2>Key Research Insights</h2>

        <div className="research-card">
          <h3>Empowering Township-Based Enterprises</h3>
          <ul>
            <li>SMEs and informal traders are the backbone of township economies.</li>
            <li>Targeting this sector drives both economic and social impact.</li>
            <li>Research: Harvard Kennedy School (Asmal et al., 2024), UNIDO (2017).</li>
          </ul>
        </div>

        <div className="research-card">
          <h3>Job Creation & Strengthening Local Value Chains</h3>
          <ul>
            <li>Structured support for SMEs creates employment and strengthens supply chains.</li>
            <li>Over 3 million jobs created by small businesses in SA (1994–2012).</li>
            <li>Local innovation is fostered by connecting SMEs to digital tools and broader markets.</li>
          </ul>
        </div>

        <div className="research-card">
          <h3>Bridging the Digital Divide</h3>
          <ul>
            <li>Township entrepreneurs are willing to adopt technology but need training.</li>
            <li>KDC provides workshops, mentorships, and platform onboarding to overcome barriers.</li>
            <li>Aligns with African Union 2030 Digital Strategy.</li>
          </ul>
        </div>

        <div className="research-card">
          <h3>Market Access as a Catalyst for Growth</h3>
          <ul>
            <li>Digital platforms reduce entry barriers for SMEs.</li>
            <li>Integration with online marketplaces and procurement networks enhances visibility.</li>
            <li>Aligns with SAIIA reports on e-commerce and AfCFTA.</li>
          </ul>
        </div>

      </section>

      {/* Conclusion */}
      <section className="research-conclusion">
        <h2>Conclusion</h2>
        <p>
          Kasi Digital Connect is evidence-based, aligning research findings with practical interventions. 
          The launch of Kasi360 further strengthens digital adoption, enterprise growth, and community 
          innovation in township economies.
        </p>
      </section>

      {/* References */}
      <section className="research-references">
        <h2>References</h2>
        <ol>
          <li>Asmal, Z., Bhorat, H., Lochmann, A., Martin, L., & Shah, K. (2024). Supporting and Expanding South Africa’s Informal Economy. Harvard Kennedy School.</li>
          <li>CeSTII. (2021). Innovation in the Informal Sector – Case Study of Food Traders. Human Sciences Research Council.</li>
          <li>Hami, C., & Mazengera, C. (2019). Informal Traders & Social Media Usage in Nelson Mandela Bay. Nelson Mandela University.</li>
          <li>Tempest, A. (2020). E-commerce & AfCFTA in Africa. SAIIA.</li>
          <li>UNIDO. (2017). National Report on E-Commerce Development in South Africa.</li>
        </ol>
      </section>

    </div>
  );
};


export default Analysis
