import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

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
  }, [token,setCart]);

  const handleRemove = async (productId) => {
    try {
      await axios.delete(`https://destechnico.vercel.app/api/cart/remove/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(cart.filter(item => item.product._id !== productId));
      toast.success("Remove product successfully");
    } catch (err) {
      console.error('Failed to remove item:', err.response.data.message);
      toast.error("Failed to remove product");
    }
  };

  return (
    <div className='cart'>
      <h2 className='heading'>Your Cart</h2>
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
