import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './StudentLogin.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for student authentication here, e.g., API call for validation
    console.log('Student Logged In:', { email, password });

    // Navigate to the StudentDashboard page after successful login
    navigate('/student-dashboard');
  };

  return (
    <div className="student-login-container">
      <h1>Student Login</h1>
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

        <Link to="/student-dashboard"> {/* Updated link to point to StudentLogin page */}
        <button type="submit" className="login-button">
          Login
        </button>
        </Link>

        
      </form>
    </div>
  );
};

export default StudentLogin;
