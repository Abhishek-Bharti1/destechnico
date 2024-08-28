import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ token }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('https://destechnico.vercel.app/api/cart', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCart(res.data.items);
      } catch (err) {
        console.error('Failed to fetch cart:', err.response.data.message);
      }
    };

    fetchCart();
  }, [token]);

  const handleRemove = async (productId) => {
    try {
      await axios.delete(`https://destechnico.vercel.app/api/cart/remove/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(cart.filter(item => item.product._id !== productId));
    } catch (err) {
      console.error('Failed to remove item:', err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.product._id}>
            {item.product.name} - Quantity: {item.quantity}
            <button onClick={() => handleRemove(item.product._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
