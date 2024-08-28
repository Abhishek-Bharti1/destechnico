import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const SellerDashboard = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://destechnico.vercel.app/api/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err.response.data.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://destechnico.vercel.app/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts(); // Refresh the list after deletion
    } catch (err) {
      console.error('Failed to delete product:', err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <ProductForm 
        product={selectedProduct} 
        token={token} 
        refreshProducts={fetchProducts} 
      />
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - {product.category}
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
