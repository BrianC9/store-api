import express from 'express';
import {
  getAllProductsStatic,
  getAllProducts,
} from '../controllers/products.js';
const router = express.Router();
router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);
console.log(global.exports);
export { router as productsRouter };
