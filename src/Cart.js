
import React from 'react';

function Cart({ cartItems, total, discount, bonusItems }) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.amount.toFixed(2)}
          </li>
        ))}
      </ol>
      <h4>Total: ${(total * (1 - discount)).toFixed(2)}</h4>
      <h4>Discount: {discount * 100}%</h4> {/* Add this line */}
      <ul>
        {bonusItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

