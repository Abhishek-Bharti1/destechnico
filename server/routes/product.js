const express = require('express');
const { addProduct, getProductsBySeller, updateProduct, deleteProduct, searchProducts } = require('../controllers/product.js');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../middlewares/authMiddleware');

// Route to add a new product (only for sellers)
router.post('/', authenticateToken, authorizeRole('seller'), addProduct);

// Route to update a product (only for sellers)
router.put('/:id', authenticateToken, authorizeRole('seller'), updateProduct);

// Route to delete a product (only for sellers)
router.delete('/:id', authenticateToken, authorizeRole('seller'), deleteProduct);

// Other routes for buyers to search for products, etc.
router.get('/', getProductsBySeller);
router.get('/search', searchProducts);


module.exports = router;
