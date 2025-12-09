import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaTools, FaHome } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const services = [
    {
      title: "Kasi-Retail",
      description:
        "Digital marketplace connecting buyers with local sellers, enabling easy transactions within the community.",
      icon: <FaShoppingCart />,
    },
    {
      title: "Kasi-Service",
      description:
        "Platform for booking skilled professionals and household services quickly and efficiently.",
      icon: <FaTools />,
    },
    {
      title: "Kasi-Rentals",
      description:
        "Rental ecosystem for sourcing short-term products and services in township and local markets.",
      icon: <FaHome />,
    },
  ];

  const contentRefs = useRef([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setHeights(newHeights);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Welcome to Kasi Digital Connect! We provide tailored digital services
          that empower local businesses and communities to grow and thrive.
        </p>
      </section>

      <section className="services-main">
        <h2>What We Offer</h2>

        <ul className="services-list">
          {services.map((service, index) => (
            <li
              key={index}
              className={`service-item ${expandedIndex === index ? "expanded" : ""}`}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <button className="learn-more-btn" onClick={() => toggleExpand(index)}>
                  {expandedIndex === index ? "Show Less" : "Learn More"}
                </button>
              </div>
              <div
                className="service-details"
                ref={(el) => (contentRefs.current[index] = el)}
                style={{ maxHeight: expandedIndex === index ? `${heights[index]}px` : "0px" }}
              >
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="services-footer-text">
          Our team is committed to helping you make the most of digital tools to
          grow your business and community impact.
        </p>
      </section>
    </div>
  );
};

export default Services;
