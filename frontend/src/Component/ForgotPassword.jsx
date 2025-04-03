import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import './ForgotPassword.css'; // CSS for styling

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); // State for email input
  const navigate = useNavigate(); // Navigation functionality

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Placeholder logic for password reset (API request can be added here)
    alert(`Password reset link sent to ${email}`);
    navigate('/choose-user'); // Redirect to Choose User page after submission
  };

  const handleBackToSignIn = () => {
    navigate('/choose-user'); // Navigate back to the "Choose User" page
  };

  return (
    <div className="forgot-password-container">
      <h1>Reset Your Password</h1>
      <form className="reset-password-form" onSubmit={handleResetPassword}>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="reset-password-button">
          Reset Password
        </button>
      </form>
      <button onClick={handleBackToSignIn} className="back-to-signin-link">
        Back to Sign In
      </button>
    </div>
  );
};

export default ForgotPassword;
