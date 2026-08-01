import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this to an Express endpoint or EmailJS later
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "50px auto", padding: "0 20px" }}>
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ color: "#4a2c11", fontSize: "36px", marginBottom: "10px" }}>
          Get in Touch
        </h1>
        <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          Have questions about our artisanal candles, custom orders, or shipping? 
          We'd love to hear from you! Fill out the form below or reach out directly.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left Side: Contact Details Card */}
        <div
          style={{
            background: "#fefae0",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ color: "#4a2c11", marginTop: 0, marginBottom: "25px" }}>
            Contact Details
          </h2>

          <div style={infoBlockStyle}>
            <div style={iconBadgeStyle}>📍</div>
            <div>
              <h4 style={infoTitleStyle}>Address</h4>
              <p style={infoTextStyle}>123 Artisan Way, Studio 4B, New York, NY 10001</p>
            </div>
          </div>

          <div style={infoBlockStyle}>
            <div style={iconBadgeStyle}>✉️</div>
            <div>
              <h4 style={infoTitleStyle}>Email Us</h4>
              <p style={infoTextStyle}>hello@divacandle.com</p>
              <p style={infoTextStyle}>support@divacandle.com</p>
            </div>
          </div>

          <div style={infoBlockStyle}>
            <div style={iconBadgeStyle}>📞</div>
            <div>
              <h4 style={infoTitleStyle}>Call Us</h4>
              <p style={infoTextStyle}>+1 (800) 555-DIVA</p>
              <p style={infoTextStyle}>Mon - Fri: 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid rgba(74, 44, 17, 0.15)" }}>
            <h4 style={{ color: "#4a2c11", marginBottom: "10px" }}>Visit Our Studio</h4>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.5" }}>
              Our workshop and showroom are open to visitors every Saturday from 10 AM to 4 PM!
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            border: "1px solid #f0f0f0",
          }}
        >
          <h2 style={{ color: "#4a2c11", marginTop: 0, marginBottom: "25px" }}>
            Send Us a Message
          </h2>

          {submitted && (
            <div
              style={{
                background: "#d4edda",
                color: "#155724",
                padding: "12px 16px",
                borderRadius: "6px",
                marginBottom: "20px",
                fontSize: "14px",
                border: "1px solid #c3e6cb",
              }}
            >
              ✅ Thank you for reaching out! We will get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div>
              <label style={labelStyle}>Your Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Email *</label>
              <input
                type="email"
                name="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Order Inquiry / Custom Request"
                value={formData.subject}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Message *</label>
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, height: "130px", resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: "#4a2c11",
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.3s ease",
                marginTop: "10px",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Styling Constants
const infoBlockStyle = {
  display: "flex",
  gap: "15px",
  marginBottom: "20px",
  alignItems: "flex-start",
};

const iconBadgeStyle = {
  background: "#4a2c11",
  color: "#fff",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  flexShrink: 0,
};

const infoTitleStyle = {
  margin: "0 0 4px 0",
  color: "#4a2c11",
  fontSize: "15px",
};

const infoTextStyle = {
  margin: 0,
  color: "#666",
  fontSize: "14px",
  lineHeight: "1.4",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "bold",
  fontSize: "13px",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
  outline: "none",
};