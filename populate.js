import dotenv from 'dotenv';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
dotenv.config();

import connectDB from './db/connect.js';
import productModel from './models/product.js';

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await productModel.deleteMany();
    await productModel.create(jsonProducts);
    console.log('Succes!!!');
    process.exit(0);
    // Once we have correctly uploaded the data tho our mongo DB, we need to stop the execution of this file.
  } catch (error) {
    console.lof(error);
    process.exit(1);
    // Also if any any error was throwing while the update we need to stop the execution and exit with an error code
  }
};
start();
