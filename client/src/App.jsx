import { useState } from 'react';
import Auth from './components/Auth';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';

const App = () => {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);

  return (
    <div>
      {!token ? (
        <Auth setToken={setToken} setUserRole={setUserRole} />
      ) : userRole === 'seller' ? (
        <SellerDashboard token={token} />
      ) : (
        <BuyerDashboard token={token} />
      )}
    </div>
  );
};

export default App;
