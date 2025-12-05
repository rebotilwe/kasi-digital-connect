import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const homeFeatures = [
  {
    title: "Empowering Communities",
    description:
      "KasiConnect bridges the gap between traditional business and the digital economy.",
  },
  {
    title: "Digital Solutions",
    description:
      "Our platform connects buyers, sellers, service providers, and renters for seamless transactions.",
  },
  {
    title: "Inclusive Growth",
    description:
      "We transform township markets into accessible and competitive digital ecosystems.",
  },
];

const featureCards = [
  {
    title: "Digital Skills",
    description: "Training on e-commerce, financial literacy, digital payments, and more.",
  },
  {
    title: "Market Access",
    description: "Connecting SMEs to Kasi360, corporate supply chains, and online buyers.",
  },
  {
    title: "Enterprise Growth",
    description: "One year of structured support for 200 adopted SMEs and informal traders.",
  },
  {
    title: "Networking",
    description: "Meet policymakers, investors, innovators, and industry leaders.",
  },
];

const sponsorshipCards = [
  {
    title: "Diamond",
    investment: "R 1,200,000 – R 800,000 (€60,000 – €40,000)",
    benefits:
      "Keynote speaking slot, branding across event marketing, prime exhibition space, media coverage, and contribution to National Imperatives.",
  },
  {
    title: "Gold",
    investment: "R 650,000 – R 450,000 (€32,500 – €22,500)",
    benefits:
      "Panel discussion participation, co-branded workshops, logo placement on event materials and contribution to National Imperatives.",
  },
  {
    title: "Silver",
    investment: "R 350,000 – R 200,000 (€17,500 – €10,000)",
    benefits:
      "Exhibition space, branding on select event materials, social media features and contribution to National Imperatives.",
  },
  {
    title: "Bronze",
    investment: "R 150,000 – R 100,000 (€7,500 – €5,000)",
    benefits:
      "Logo on event banners, social media mentions, brand visibility on website and contribution to National Imperatives.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Kasi Digital Connect</h1>
          <h3>Technology. Access. Growth.</h3>
          <p>
            A modern multi-service digital platform empowering local communities to transact conveniently,
            confidently, and efficiently. Our goal is to transform township and local markets into strong,
            accessible, and competitive digital ecosystems.
          </p>
          <button className="hero-btn" onClick={goToAbout}>
            Learn More
          </button>
        </div>
      </section>

      {/* ABOUT CARDS SECTION */}
      <section className="about-cards-section">
        <h2>Why KasiConnect?</h2>
        <div className="about-cards-container">
          {homeFeatures.map((feature, index) => (
            <div key={index} className="about-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Our Focus Areas</h2>
        <div className="feature-container">
          {featureCards.map((card, index) => (
            <div key={index} className="feature-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSORSHIP SECTION */}
      <section className="sponsorship-section">
        <h2>Sponsorship Opportunities</h2>
        <p className="sponsorship-intro">
          Partner with us in driving economic transformation through digital empowerment!
        </p>

        <div className="sponsorship-cards">
          {sponsorshipCards.map((card, index) => (
            <div key={index} className="sponsorship-card">
              <h3>{card.title}</h3>
              <p className="investment">{card.investment}</p>
              <p className="benefits">{card.benefits}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Be Part of the Movement</h2>
        <p>Join us in shaping the digital future of township economies.</p>
        <button className="cta-btn" onClick={goToContact}>Get Involved</button>
      </section>
    </div>
  );
};

export default Home;
