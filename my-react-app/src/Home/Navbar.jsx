import React from 'react';

function Navbar() {
  return (
    
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
        <li><a href="#about">About Us</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  
  );
}

export default Navbar;
