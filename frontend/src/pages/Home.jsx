import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [featuredCandles, setFeaturedCandles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setFeaturedCandles(res.data))
      .catch((err) => console.error("Error fetching candles:", err));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "50px 20px", background: "#fefae0" }}>
        <h1 style={{ color: "#4a2c11", fontSize: "36px" }}>Welcome to DivaCandle</h1>
        <p style={{ color: "#666" }}>Handcrafted, artisanal scented candles made with love.</p>
        <Link to="/products" style={{ background: "#4a2c11", color: "#fff", padding: "10px 20px", borderRadius: "5px", textDecoration: "none" }}>
          Shop All Candles
        </Link>
      </section>

      {/* Featured Collection */}
      <section style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ textAlign: "center", color: "#4a2c11", marginBottom: "30px" }}>Featured Collection</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "25px" }}>
          {featuredCandles.map((candle) => (
            <div key={candle._id} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "15px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <img
                src={candle.image || "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500"}
                alt={candle.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500";
                }}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px" }}
              />
              <h3 style={{ margin: "10px 0 5px", color: "#333" }}>{candle.name}</h3>
              <p style={{ color: "#777", fontSize: "14px" }}>{candle.description}</p>
              <strong style={{ color: "#4a2c11", fontSize: "18px" }}>${candle.price}</strong>
              <div style={{ marginTop: "12px" }}>
                <Link to={`/products/${candle._id}`} style={{ display: "block", textAlign: "center", background: "#d4a373", color: "#fff", padding: "8px", borderRadius: "5px", textDecoration: "none", fontWeight: "bold" }}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}