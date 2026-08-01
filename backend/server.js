import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();

// Enable CORS so your React frontend can communicate with Node
app.use(cors());

// Increase payload limits to accept large uploaded image strings (Base64)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Default API welcome route
app.get('/', (req, res) => {
  res.send('DivaCandle API is running...');
});

// Register API Routes
app.use('/api/products', productRoutes);

// MongoDB Connection with Fallback (Atlas Cloud -> Local MongoDB)
const connectDB = async () => {
  const localUri = 'mongodb://127.0.0.1:27017/divacandle';
  const atlasUri = process.env.MONGO_URI;

  try {
    if (atlasUri) {
      await mongoose.connect(atlasUri);
      console.log('Connected to MongoDB Atlas successfully!');
    } else {
      await mongoose.connect(localUri);
      console.log('Connected to Local MongoDB successfully!');
    }
  } catch (err) {
    console.error('Atlas connection failed. Falling back to local MongoDB...');
    try {
      await mongoose.connect(localUri);
      console.log('Connected to Local MongoDB successfully!');
    } catch (localErr) {
      console.error('❌ Could not connect to any MongoDB instance:', localErr.message);
    }
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});