import dotenv from 'dotenv';
import express from 'express';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFound from './middleware/not-found.js';
import connectDB from './db/connect.js';
import { productsRouter } from './routes/products.js';
// Async wrapper cleaner alternative
import 'express-async-errors';
// This package handle all the async-wrapper reququests functionality we created on the Task Manger project
// The adventages of using this are:
// 1. we dont have to mess the code with our own async function to wrap all the requests
// 2. We dont have to use try/catch in order to catch the errors
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
