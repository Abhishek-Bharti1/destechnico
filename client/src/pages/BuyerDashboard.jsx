import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const BuyerDashboard = ({ token }) => {
  
  return (
    <div className='dashboard'>
      <h1 className='heading'>Buyer Dashboard</h1>
      <ProductList token={token} />
      <Cart token={token} />
    </div>
  );
};

export default BuyerDashboard;
