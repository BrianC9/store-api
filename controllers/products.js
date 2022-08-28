export const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: 'Products testing route' });
};

export const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'Products route' });
};
