import { useState,Suspense,lazy } from 'react';
import Auth from './components/Auth';
const SellerDashboard = lazy(() => import('./pages/SellerDashboard'));
const BuyerDashboard  = lazy(() => import('./pages/BuyerDashboard'));
import Loader from "./components/Loader";
import { ToastContainer} from 'react-toastify';
import "./App.css";
const App = () => {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState(null);
console.log(userRole);
  return (
    <div className='App'>
     <Suspense fallback={<Loader/>}>
      {!token ? (
        <Auth setToken={setToken} setUserRole={setUserRole} />
      ) : userRole === 'seller' ? (
        <SellerDashboard token={token} />
      ) : (
        <BuyerDashboard token={token} />
      )}
      <ToastContainer />
      </Suspense>
    </div>
  );
};

export default App;
