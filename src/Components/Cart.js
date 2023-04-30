import React, { useState } from 'react';

const Cart = (props) => {
  const { cartItems } = props;
  const [discount, setDiscount] = useState(0);

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);

    if (cartItems.length >= 3) {
      setDiscount(0.1);
      return total * 0.9;
    } else {
      setDiscount(0);
      return total;
    }
  };

  return (
    <div className="Cart">
      <h3>Cart</h3>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ol>
      <h4>Total: ${calculateTotal()}</h4>
    </div>
  );
};

export default Cart;
