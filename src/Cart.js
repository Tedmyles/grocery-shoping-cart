import React from 'react';
import './Cart.css';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Ksh{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
