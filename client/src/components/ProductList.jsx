import { useState, useEffect } from 'react';
import axios from 'axios';
import AddToCart from './AddToCart';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://destechnico.vercel.app/api/products/search', {
          params: { name: searchTerm, category },
        });
        setProducts(res.data);
      } catch (err) {
        console.error('Failed to fetch products:', err.response.data.message);
      }
    };

    fetchProducts();
  }, [searchTerm, category]);

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Search by category" 
      />
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <AddToCart product={product} token={token} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
