import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './SignUpPage.css'; // Import the CSS file for styling

const SignUpPage = () => {
  // State hooks for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  // Function to handle the sign-up process
  const handleSignUp = (e) => {
    e.preventDefault();

    // Password matching validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Terms and Conditions acceptance validation
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    // Success logic
    console.log("Sign-up Details:", { email, password });
    alert("Signed up successfully!");

    // Redirect to ChooseUser page after successful sign-up
    navigate('/choose-user'); // Navigate to the ChooseUser route
  };

  return (
    <div className="signup-container">
      {/* Sign-up Header */}
      <div className="signup-header">
        <h1>Register Your Account</h1>
        <p>Join us and unlock the best educational experience.</p>
      </div>

      {/* Sign-up Form */}
      <form onSubmit={handleSignUp} className="signup-form">
        <input
          type="email"
          placeholder="Your Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Choose Password *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password *"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="terms-container">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label>
            Accept our <a href="/terms">Terms & Conditions</a>
          </label>
        </div>
        <button type="submit" className="signup-button">Sign up</button>
      </form>

      {/* Login Redirect */}
      <div className="login-link">
        <a href="/choose-user">Already have an account? Login</a>
      </div>
    </div>
  );
};

export default SignUpPage;
