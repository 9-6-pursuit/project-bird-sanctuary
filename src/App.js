import React, { useState } from 'react';
import BirdCard from './Components/BirdCard';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import birdData from './data/birds';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (bird) => {
    setCartItems([...cartItems, bird]);
  };

  return (
    <div>
      <h1>Bird Sanctuary Donation App</h1>
      {birdData.map((bird) => (
        <BirdCard key={bird.id} bird={bird} handleAddToCart={handleAddToCart} />
      ))}
      <Cart cartItems={cartItems} />
      <Checkout cartItems={cartItems} />
    </div>
  );
};
