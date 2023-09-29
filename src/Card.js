import React, { useState } from 'react';
import './Card.css';


import appleImage from './images/apple.jpg';
 

function Card({ item, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(item);
    setQuantity(quantity + 1);
  };

  return (
    <div className="card">
      <img src={appleImage} alt={item.image} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Ksh{item.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {quantity > 0 && <p className="quantity">{quantity}</p>}
    </div>
  );
}

export default Card;
