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
    // Una vez hemos subido correctamente nuestros datos a mongodb, es necesario que dejemos de ejecturar nuestro archivo
  } catch (error) {
    console.lof(error);
    process.exit(1);
    // Si ha ocurrido algun error, paramos la ejecución del programa y le indicamos la salida con un codigo de error
  }
};
start();
