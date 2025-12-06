import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // for success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mjknolla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or want to get involved? Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Form Section */}
      <section className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Success / Error Messages */}
          {status === "success" && (
            <p className="success-msg">Message sent successfully ✔</p>
          )}
          {status === "error" && (
            <p className="error-msg">Something went wrong. Please try again.</p>
          )}
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Or Reach Us Directly:</h3>
          <p>Address: 48 Fountains, 28 Graham Road, Lombardy Estate, Pretoria, 0081</p>
          <p>Email: <a href="mailto:info@kasiconnect.co.za">info@kasiconnect.co.za</a></p>
          <p>Phone: +27 12 345 6789</p>
          <p>Follow us on Social Media: Instagram | LinkedIn | Twitter</p>

          {/* Map */}
          <div className="contact-map">
            <iframe
              title="KasiConnect Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789!2d28.178123!3d-25.750123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956123456789ab%3A0xc123456789abcdef!2s48%20Fountains%2C%2028%20Graham%20Rd%2C%20Lombardy%20Estate%2C%20Pretoria!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
