import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      {/* Sign In Button */}
      <Link to="/choose-user">
        <button className="signin-button" aria-label="Sign In Button">
          Sign In
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
