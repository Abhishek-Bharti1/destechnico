import React, { useState } from 'react';
import axios from 'axios';

const AddToCart = ({ product, token }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    try {
      const res = await axios.post('https://destechnico.vercel.app/api/cart/add', {
        productId: product._id,
        quantity,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Product added to cart successfully!');
      console.log('Cart:', res.data);
    } catch (err) {
      console.error('Failed to add to cart:', err.response.data.message);
    }
  };

  return (
    <div>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        min="1" 
        placeholder="Quantity" 
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
