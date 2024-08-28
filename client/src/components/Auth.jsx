import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Auth = ({ setToken, setUserRole }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Default role

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignUp ? 'https://destechnico.vercel.app/api/auth/signup' : 'https://destechnico.vercel.app/api/auth/login';
      const res = await axios.post(url, { email, password});
      setToken(res.data.token);
      setUserRole(res.data.user.role);
      toast.success ( "Login successful");
    } catch (err) {
      console.error('Auth failed:', err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
      />
      {isSignUp && (
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      )}
      <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </form>
  );
};

export default Auth;
