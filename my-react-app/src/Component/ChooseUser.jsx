import React, { useState } from 'react';
import './ChooseUser.css'; // Import additional CSS for styling
import { useNavigate } from 'react-router-dom'; // Navigation functionality

const ChooseUser = () => {
  const [selectedUserType, setSelectedUserType] = useState(''); // State for selected user type
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!selectedUserType) {
      alert('Please select a user type before logging in!'); // Validation for user type selection
      return;
    }

    // Navigate to the dashboard based on the selected user type
    switch (selectedUserType) {
      case 'Admin':
        navigate('/admin-dashboard');
        break;
      case 'Teacher':
        navigate('/teacher-dashboard');
        break;
      case 'Student':
        navigate('/student-dashboard');
        break;
      case 'Parent':
        navigate('/parent-portal');
        break;
      default:
        alert('Invalid user type!'); // Fallback for unexpected cases
    }
  };

  return (
    <div className="choose-user-container">
      {/* Account Link */}
      <div className="account-link">
        <a href="/signup">I do not have an account yet.</a>
      </div>

      {/* User Type Section */}
      <div className="user-type-container">
        <div
          className={`user-type ${selectedUserType === 'Admin' ? 'selected' : ''}`}
          onClick={() => setSelectedUserType('Admin')}
        >
          <span className="user-icon">&#128104;</span> {/* Admin Icon */}
          <p>Admin</p>
        </div>
        <div
          className={`user-type ${selectedUserType === 'Teacher' ? 'selected' : ''}`}
          onClick={() => setSelectedUserType('Teacher')}
        >
          <span className="user-icon">&#128105;</span> {/* Teacher Icon */}
          <p>Teacher</p>
        </div>
        <div
          className={`user-type ${selectedUserType === 'Student' ? 'selected' : ''}`}
          onClick={() => setSelectedUserType('Student')}
        >
          <span className="user-icon">&#128102;</span> {/* Student Icon */}
          <p>Student</p>
        </div>
        <div
          className={`user-type ${selectedUserType === 'Parent' ? 'selected' : ''}`}
          onClick={() => setSelectedUserType('Parent')}
        >
          <span className="user-icon">&#128106;</span> {/* Parent Icon */}
          <p>Parent</p>
        </div>
      </div>

      {/* Login Form */}
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" className="login-input" required />
        <input type="password" placeholder="Password" className="login-input" required />
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>

      {/* Forgot Password Link */}
      <div className="forgot-password">
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default ChooseUser;
