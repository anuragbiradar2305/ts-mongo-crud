import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes';

// Load environment variables from .env file
dotenv.config();

const app = express();

// MongoDB URI from environment variable
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('MongoDB connection string is missing from environment variables.');
}

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json()); // To parse JSON bodies
app.use('/api', postRoutes); // Use postRoutes for all endpoints under '/api'

// Simple route to check server
app.get('/', (req, res) => {
  res.send('TypeScript MongoDB CRUD API by Anurag..!!');
});

export default app;
