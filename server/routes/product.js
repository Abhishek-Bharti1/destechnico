const express = require('express');
const router = express.Router();
const { addProduct, getProductsBySeller, getProductById, updateProduct, deleteProduct, searchProducts } = require('../controllers/product.js');
const { authenticateToken } = require('../middlewares/authMiddleware.js');
router.get('/search', searchProducts);
// Middleware to protect routes
router.use(authenticateToken);

// Route to add a product
router.post('/', addProduct);


router.get('/', getProductsBySeller);

// Route to get a product by ID
router.get('/:id', getProductById);

// Route to update a product
router.put('/:id', updateProduct);

// Route to delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
