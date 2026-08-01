import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px" }}>
      {/* Clickable Brand Logo/Name */}
      <Link to="/" style={{ textDecoration: "none", color: "#4a2c11" }}>
        <h1 style={{ margin: 0, fontSize: "24px", letterSpacing: "2px" }}>
          DIVA CANDLE
        </h1>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>Home</Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>About</Link>
        <Link to="/products" style={{ textDecoration: "none", color: "#333" }}>Products</Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "#333" }}>Contact</Link>
        <Link to="/admin" style={{ textDecoration: "none", color: "#d4a373", fontWeight: "bold" }}>Admin Panel</Link>
      </div>
    </nav>
  );
}