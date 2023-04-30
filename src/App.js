import React, { useState } from 'react';
import BirdCard from './Components/BirdCard';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import birdData from './data/birds';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0);
  };

  const applyDiscount = (totalCost) => {
    return totalCost >= 3000 ? totalCost * 0.9 : totalCost;
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <div className="bird-container">
        {birdData.map((bird) => (
          <BirdCard
            key={bird.id}
            bird={bird}
            handleAddToCart={addToCart}
          />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        calculateTotalCost={calculateTotalCost}
        applyDiscount={applyDiscount}
        resetCart={resetCart}
      />
      <Checkout
        cartItems={cartItems}
        calculateTotalCost={calculateTotalCost}
        applyDiscount={applyDiscount}
        resetCart={resetCart}
      />
    </div>
  );
}

export default App;
