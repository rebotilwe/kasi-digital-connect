import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

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
      
      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have a question, need assistance, or want to collaborate with us? 
          Send us a message and our team will get back to you shortly.
        </p>
      </section>

      {/* FORM + INFO SECTION */}
      <section className="contact-form-section">
        
        {/* FORM */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject (Optional)"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Success / Error Messages */}
          {status === "success" && (
            <p className="success-msg">✔ Message sent successfully</p>
          )}
          {status === "error" && (
            <p className="error-msg">Something went wrong. Try again.</p>
          )}
        </form>

        {/* CONTACT INFORMATION */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p><strong>Address:</strong><br />
            48 Fountains, 28 Graham Road, Lombardy Estate, Pretoria, 0081
          </p>

          <p><strong>Email:</strong><br />
            <a href="mailto:info@kasiconnect.co.za">info@kasiconnect.co.za</a>
          </p>

          <p><strong>Phone:</strong><br />
            +27 12 345 6789
          </p>

          <p><strong>Follow Us:</strong><br />
            Instagram | LinkedIn | Twitter
          </p>

          {/* MAP */}
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
