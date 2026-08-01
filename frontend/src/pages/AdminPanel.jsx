import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [candles, setCandles] = useState([]);
  const [editingId, setEditingId] = useState(null); // Track item being edited

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "0",
    offerTag: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    fetchCandles();
  }, []);

  const fetchCandles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setCandles(res.data);
    } catch (err) {
      console.error("Error fetching candles:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle local file upload and convert to Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Add or Update submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      if (editingId) {
        // Update existing candle
        await axios.put(`http://localhost:5000/api/products/${editingId}`, formData);
        alert("Candle updated successfully!");
      } else {
        // Create new candle
        await axios.post("http://localhost:5000/api/products", formData);
        alert("Candle added successfully!");
      }
      resetForm();
      fetchCandles();
    } catch (err) {
      console.error("Error saving candle:", err);
      alert("Failed to save candle.");
    }
  };

  // Populate form for editing
  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({
      name: item.name || "",
      description: item.description || "",
      price: item.price || "",
      discount: item.discount || "0",
      offerTag: item.offerTag || "",
      stock: item.stock || "",
      image: item.image || "",
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this candle?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchCandles();
      } catch (err) {
        console.error("Error deleting candle:", err);
      }
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      discount: "0",
      offerTag: "",
      stock: "",
      image: "",
    });
  };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
      <h2>Admin Control Panel</h2>

      {/* Add / Edit Form */}
      <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h3 style={{ marginTop: 0, color: "#4a2c11" }}>
          {editingId ? "Edit Candle" : "Add New Candle"}
        </h3>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            style={{ ...inputStyle, height: "80px" }}
          />
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            value={formData.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount (%)"
            value={formData.discount}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="offerTag"
            placeholder="Special Offer (e.g. Buy 1 Get 1 Free)"
            value={formData.offerTag}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            style={inputStyle}
          />

          {/* Image Upload File Picker Only */}
          <div style={{ display: "flex", alignItems: "center", gap: "15px", margin: "10px 0" }}>
            <label
              style={{
                padding: "10px 18px",
                background: "#6c757d",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Insert Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>

            {/* Thumbnail Preview of Selected Image */}
            {formData.image ? (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src={formData.image}
                  alt="Preview"
                  style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                />
                <span style={{ fontSize: "13px", color: "green", fontWeight: "bold" }}>✓ Image selected</span>
              </div>
            ) : (
              <span style={{ fontSize: "13px", color: "#888" }}>No image selected</span>
            )}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="submit"
              style={{
                background: editingId ? "#28a745" : "#4a2c11",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                flex: 1,
              }}
            >
              {editingId ? "Update Candle" : "Add Candle"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                style={{
                  background: "#6c757d",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Inventory Table */}
      <div style={{ marginTop: "50px" }}>
        <h3>Inventory</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
          <thead>
            <tr style={{ background: "#4a2c11", color: "#fff" }}>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Discount</th>
              <th style={thStyle}>Offer Tag</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candles.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                  No items in inventory.
                </td>
              </tr>
            ) : (
              candles.map((item) => (
                <tr key={item._id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={tdStyle}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "4px" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/40";
                      }}
                    />
                  </td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>${item.price}</td>
                  <td style={tdStyle}>{item.discount || 0}%</td>
                  <td style={tdStyle}>{item.offerTag || "-"}</td>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => handleEdit(item)}
                        style={{
                          background: "#ffc107",
                          color: "#212529",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        style={{
                          background: "#d9534f",
                          color: "#fff",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styling Helper Constants
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
};