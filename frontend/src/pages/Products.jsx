import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center", padding: "40px" }}>Loading candles...</p>;

  return (
    <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ color: "#4a2c11", marginBottom: "20px" }}>All Candles</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "25px" }}>
        {products.map((item) => (
          <div key={item._id} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "15px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <img
              src={item.image || "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500"}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500";
              }}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{item.name}</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>{item.description}</p>
            <strong style={{ fontSize: "18px", color: "#4a2c11" }}>${item.price}</strong>
            <div style={{ marginTop: "12px" }}>
              <Link to={`/products/${item._id}`} style={{ display: "block", textAlign: "center", background: "#d4a373", color: "#fff", padding: "8px", borderRadius: "5px", textDecoration: "none", fontWeight: "bold" }}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}