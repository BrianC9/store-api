import productModel from '../models/product.js';
export const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: 'Products testing route' });
};

export const getAllProducts = async (req, res) => {
  const products = await productModel.find({});

  res.status(200).json({ products });
};
