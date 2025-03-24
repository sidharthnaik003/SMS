import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserInterface.css';

const UserInterfaceNavbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // For navigation

  const toggleMenu = () => setShowMenu(!showMenu); // Toggle menu visibility
  const handleSignUp = () => {
    navigate('/signup'); // Navigate to Sign Up page
    setShowMenu(false); // Close menu after navigation
  };
  const handleLogin = () => {
    navigate('/choose-user'); // Navigate to Login page
    setShowMenu(false); // Close menu after navigation
  };
  const handleHelp = () => {
    alert('Help Section Coming Soon!'); // Display "Coming Soon" message
    setShowMenu(false); // Close the dropdown menu
  };

  return (
    <nav className="navbar user-interface-container">
      {/* Navbar Header */}
      <h1 className="navbar-header">School Management System</h1>

      {/* Hamburger Menu / Close Button (Toggled) */}
      <button
        className="toggle-menu-button"
        aria-label={showMenu ? 'Close Menu' : 'Open Menu'}
        onClick={toggleMenu}
      >
        {showMenu ? (
          <span className="close-icon">✖</span> // Close Button
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </> // Three-Bar Button (Hamburger Menu)
        )}
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="dropdown-menu">
          <button className="action-button help-button" onClick={handleHelp}>
            Help
          </button>

          {/* Sign-Up Button */}
          <button
            className="action-button sign-up-button"
            onClick={handleSignUp}
          >
            <span style={{ marginRight: '10px' }}>&#128100;</span> Sign Up
          </button>

          {/* Login Button */}
          <button
            className="action-button login-button"
            onClick={handleLogin}
          >
            <span style={{ marginRight: '10px' }}>&#128274;</span> Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default UserInterfaceNavbar;
