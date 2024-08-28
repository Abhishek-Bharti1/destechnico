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
    <div className='buyers'>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
        className='margin-right'
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Search by category" 
      />
      <div className='products'>
        {products.map(product => (
          <div key={product._id}>
        <img src="https://cgu-odisha.ac.in/wp-content/uploads/2023/05/electronic-engineering-1-1024x682.jpg" height={80} width={120}/>
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
