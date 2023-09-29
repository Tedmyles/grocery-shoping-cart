import React from 'react';
import './Navbar.css';
import './crt.css';

function Navbar({ totalItems }) {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cart">Cart ({totalItems})</a></li>
        <li><a href="/">About</a></li>
     
      </ul>
    </nav>
  );
}

export default Navbar;
