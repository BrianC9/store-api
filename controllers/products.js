import productModel from '../models/product.js';
export const getAllProductsStatic = async (req, res) => {
  const search = 'bed';
  const products = await productModel.find({
    name: { $regex: search, $options: 'i' },
  });

  res.status(200).json({ totalProducts: products.length, products });
};

export const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }
  const products = await productModel.find(queryObject);
  console.log(req.query);
  res.status(200).json({ totalProducts: products.length, products });
};
