import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const BuyerDashboard = ({ token }) => {
  return (
    <div>
      <h1>Buyer Dashboard</h1>
      <ProductList token={token} />
      <Cart token={token} />
    </div>
  );
};

export default BuyerDashboard;
