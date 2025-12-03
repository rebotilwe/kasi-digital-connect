import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log(formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions or want to get involved? Fill out the form below, and we’ll get back to you as soon as possible.</p>
      </section>

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
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Or Reach Us Directly:</h3>
          <p>Email: <a href="mailto:info@kasidigitalconnect.co.za">info@kasidigitalconnect.co.za</a></p>
          <p>Phone: +27 12 345 6789</p>
          <p>Follow us on Social Media: Instagram | LinkedIn | Twitter</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
