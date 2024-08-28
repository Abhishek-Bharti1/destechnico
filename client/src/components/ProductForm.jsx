import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductForm = ({ product, token, refreshProducts }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [category, setCategory] = useState(product ? product.category : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [discount, setDiscount] = useState(product ? product.discount : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = product ? `https://destechnico.vercel.app/api/products/${product._id}` : 'https://destechnico.vercel.app/api/products';
      const method = product ? 'put' : 'post';
      await axios({
        method,
        url,
        data: { name, category, description, price, discount },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      refreshProducts(); // Refresh product list after adding/editing
      toast.success("Product added successfully");
    } catch (err) {
      console.error('Product save failed:', err.response.data.message);
      toast.error("Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formP'>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Product Name" 
        required 
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category (e.g., clothes, shoes)" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        required 
      />
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="Price" 
        required 
      />
      <input 
        type="number" 
        value={discount} 
        onChange={(e) => setDiscount(e.target.value)} 
        placeholder="Discount (%)" 
      />
      <button type="submit">{product ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
