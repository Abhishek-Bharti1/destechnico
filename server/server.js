const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.js');
const productRoutes = require('./routes/product.js');
const cartRoutes = require('./routes/cart.js');

const connectDB = require('./config/config.js');

dotenv.config();

const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);


// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
