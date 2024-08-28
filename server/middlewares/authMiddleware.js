const jwt = require('jsonwebtoken');
const User = require('../models/User.js'); // Import your User model

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    // Attach user to the request object
    req.user = await User.findById(user.id);
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = { authenticateToken };
