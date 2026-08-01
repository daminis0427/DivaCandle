import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#4a2c11",
        color: "#fefae0",
        padding: "40px 20px 20px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          paddingBottom: "30px",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* Brand Column */}
        <div>
          <h2 style={{ letterSpacing: "2px", margin: "0 0 10px 0" }}>
            DIVA CANDLE
          </h2>
          <p style={{ color: "#d4a373", fontSize: "14px", lineHeight: "1.6" }}>
            Handcrafted, organic scented candles made to bring warmth, peace,
            and light into your everyday space.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 style={{ color: "#d4a373", marginBottom: "15px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li>
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li>
              <Link to="/products" style={linkStyle}>Products</Link>
            </li>
            <li>
              <Link to="/about" style={linkStyle}>About Us</Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle}>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Customer Care Column */}
        <div>
          <h4 style={{ color: "#d4a373", marginBottom: "15px" }}>Customer Care</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li>
              <span style={{ color: "#ccc", cursor: "pointer" }}>Shipping & Delivery</span>
            </li>
            <li>
              <span style={{ color: "#ccc", cursor: "pointer" }}>Returns Policy</span>
            </li>
            <li>
              <span style={{ color: "#ccc", cursor: "pointer" }}>Care Instructions</span>
            </li>
            <li>
              <span style={{ color: "#ccc", cursor: "pointer" }}>FAQs</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 style={{ color: "#d4a373", marginBottom: "15px" }}>Stay Warm</h4>
          <p style={{ fontSize: "14px", color: "#ccc", marginBottom: "10px" }}>
            Subscribe to receive special offers and new candle drops.
          </p>
          <div style={{ display: "flex", gap: "5px" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                fontSize: "14px",
                flex: 1,
              }}
            />
            <button
              style={{
                backgroundColor: "#d4a373",
                color: "#fff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          fontSize: "13px",
          color: "#aaa",
        }}
      >
        © {new Date().getFullYear()} DivaCandle. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
  transition: "color 0.2s",
};