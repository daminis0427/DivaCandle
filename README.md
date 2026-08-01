# 🕯️ DivaCandle — Handcrafted Artisanal Candle Store

A full-stack **MERN (MongoDB, Express, React, Node.js)** e-commerce platform for handcrafted scented candles. Includes a clean customer storefront, interactive product catalog, custom contact interface, and a full-featured Admin Panel with image uploading and CRUD inventory management.

---

## 🚀 Live Features

* **🏡 Dynamic Home Page:** Featured candle showcases with smooth scrolling and responsive design.
* **🛍️ Product Catalog:** Full shop view with product details, pricing, discount tags, and stock counts.
* **📦 Product Detail View:** Dedicated route for individual candle items (`/products/:id`).
* **🛠️ Admin Panel Dashboard:**
  * **Image File Upload:** Direct local image file picker with instant preview thumbnail.
  * **Full CRUD Operations:** Add new items, update existing candle listings, and delete inventory in real time.
* **📬 Interactive Contact Page:** Styled two-column contact section with studio details and functional inquiry form.
* **⚓ Fixed / Scrollable Footer:** Sticky layout that stays at the viewport bottom on short pages and sits naturally below content when scrolling.

---

## 🛠️ Tech Stack

### Frontend
* **React 18** (Vite build tool)
* **React Router DOM v6** (Client-side routing)
* **Axios** (HTTP API requests)
* **CSS Flexbox & Grid** (Responsive layout styling)

### Backend
* **Node.js & Express.js** (REST API)
* **MongoDB & Mongoose** (Database ORM with dual cloud Atlas / local connection fallback)
* **Cors & Dotenv** (Middleware & environment variables)

---

## 📂 Project Structure

```text
DIVACANDLE/
├── models/             # Mongoose Schemas (Product.js)
├── routes/             # Express API Routes (productRoutes.js)
├── node_modules/       # Backend dependencies
├── .env                # Backend environment configuration (Ignored by Git)
├── .gitignore          # Unified root gitignore file
├── package.json        # Backend package setup
├── server.js           # Express server entry point & MongoDB connection
│
└── frontend/           # Vite + React Frontend Application
    ├── public/         # Static assets
    ├── src/
    │   ├── components/ # Reusable components (Navbar.jsx, Footer.jsx)
    │   ├── pages/      # Route pages (Home, Products, ProductDetail, Contact, AdminPanel)
    │   ├── App.jsx     # Main React routes & App layout wrapper
    │   ├── index.css   # Global sticky layout & flex styles
    │   └── main.jsx    # React DOM entry point
    ├── package.json    # Frontend package setup
    └── vite.config.js  # Vite configuration