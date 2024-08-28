const Product = require('../models/Product.js');

// Add a product
const addProduct = async (req, res) => {
  const { name, category, description, price, discount } = req.body;
  const newProduct = new Product({ 
    name, 
    category, 
    description, 
    price, 
    discount, 
    seller: req.user.id // Ensure the product is associated with the logged-in seller
  });
  await newProduct.save();
  res.status(201).json(newProduct);
};


// Get products for a specific seller
const getProductsBySeller = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

// Get a product by ID
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  if (product.seller.toString() !== req.user.id.toString()) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  res.status(200).json(product);
};

// Update a product
const updateProduct = async (req, res) => {
  const { name, category, description, price, discount } = req.body;
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  if (product.seller.toString() !== req.user.id.toString()) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  product.name = name || product.name;
  product.category = category || product.category;
  product.description = description || product.description;
  product.price = price || product.price;
  product.discount = discount || product.discount;
  await product.save();
  res.status(200).json(product);
};

// Delete a product
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  if (product.seller.toString() !== req.user.id.toString()) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Product deleted successfully' });
};
const searchProducts = async (req, res) => {
    const { name, category } = req.query;
  
    let query = {};
    if (name) query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    if (category) query.category = category;
  
    try {
      const products = await Product.find(query);
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
module.exports = {
  addProduct,
  getProductsBySeller,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts
};
