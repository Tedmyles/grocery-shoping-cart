import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Cart from './Cart';
import groceryData from './data/groceryData';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <Navbar totalItems={cartItems.length} />
      <div className="container">
        <div className="card-container">
          {groceryData.map((item) => (
            <Card key={item.id} item={item} onAddToCart={addToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
