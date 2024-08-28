const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware.js');
const { addToCart, removeFromCart, getCart } = require('../controllers/cart.js');

// Middleware to protect routes
router.use(authenticateToken);

// Route to add item to cart
router.post('/add', addToCart);

// Route to remove item from cart
router.delete('/remove/:productId', removeFromCart);

// Route to get cart
router.get('/', getCart);

module.exports = router;
