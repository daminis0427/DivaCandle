# DivaCandle – MERN Stack E-Commerce Project

DivaCandle is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application for showcasing and managing handmade candle products. The project includes a React + Vite frontend and a Node.js + Express backend connected to MongoDB.

---

## Project Overview

The application allows users to browse candle products, view product details, and navigate through multiple pages such as Home, About, Products, Contact, and an Admin Panel for product management.

### Tech Stack

**Frontend**

* React 19
* Vite
* React Router DOM
* Axios
* Lucide React

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* CORS
* Dotenv

---

## Project Structure

```
DivaCandle_2_2/
└── divacandle/
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── assets/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   ├── package.json
    │   └── vite.config.js
    │
    └── backend/
        ├── models/
        ├── routes/
        ├── server.js
        ├── seed.js
        ├── package.json
        └── .env
```

---

## Features

* Home page with product showcase
* About page
* Products listing page
* Product detail page
* Contact page
* Admin panel for product management
* REST API for products
* MongoDB database integration
* Responsive React frontend
* Express backend with CORS enabled

---

## Installation

The `node_modules` folders are intentionally removed from both the frontend and backend. Install dependencies using the following steps.

### 1. Clone or Extract the Project

```
git clone <repository-url>
```

or extract the provided ZIP file.

---

## Backend Setup

### Navigate to the backend folder

```
cd divacandle/backend
```

### Install dependencies

```
npm install
```

### Configure Environment Variables

Create or edit the `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Start the backend server

Development mode:

```
npm run dev
```

Production mode:

```
npm start
```

The backend runs at:

```
http://localhost:5000
```

---

## Frontend Setup

### Open a new terminal

```
cd divacandle/frontend
```

### Install dependencies

```
npm install
```

### Start the development server

```
npm run dev
```

The frontend runs at:

```
http://localhost:5173
```

---

## API Endpoints

Base URL:

```
http://localhost:5000/api/products
```

Example endpoints:

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/products     | Get all products  |
| GET    | /api/products/:id | Get product by ID |
| POST   | /api/products     | Add a new product |
| PUT    | /api/products/:id | Update a product  |
| DELETE | /api/products/:id | Delete a product  |

---

## Available Scripts

### Backend

```
npm start
```

Runs the backend server.

```
npm run dev
```

Runs the backend with Nodemon.

### Frontend

```
npm run dev
```

Starts the Vite development server.

```
npm run build
```

Builds the production version.

```
npm run preview
```

Previews the production build.

---

## Database

The backend connects to MongoDB using Mongoose.

If `MONGO_URI` is provided, the application connects to MongoDB Atlas.

If not, it falls back to a local MongoDB instance:

```
mongodb://127.0.0.1:27017/divacandle
```

---

## Running the Complete Project

### Terminal 1

```
cd divacandle/backend
npm install
npm run dev
```

### Terminal 2

```
cd divacandle/frontend
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## Notes

* `node_modules` folders are excluded from the project.
* Install dependencies separately in both `frontend` and `backend`.
* Ensure MongoDB is running locally or provide a valid MongoDB Atlas connection string in `.env`.

---

## Author

**Damini Ramrao Sonawane**

This project was developed as a MERN Stack web application demonstrating React frontend development, Express backend APIs, and MongoDB database integration.
