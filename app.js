import dotenv from 'dotenv';
import express from 'express';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFound from './middleware/not-found.js';
import connectDB from './db/connect.js';
import { productsRouter } from './routes/products.js';
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello i´m working</h1>');
});
app.use('/api/v1/products', productsRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`app listening ON port ${PORT}`);
    });
  } catch (error) {
    console.error('Error on starting the app', error);
  }
};
start();
