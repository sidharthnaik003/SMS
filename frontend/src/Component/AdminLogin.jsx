import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './AdminLogin.css'; // Import the CSS file for styling

const AdminLogin = () => {
  const [email, setEmail] = useState(''); // State to track email input
  const [password, setPassword] = useState(''); // State to track password input
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here (API or validation)
    console.log('Admin Logged In:', { email, password });

    // Navigate to the admin dashboard after successful login
    navigate('/admin-dashboard');
  };

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
