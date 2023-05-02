

import React, { useState, useMemo } from 'react';
import birdData from './data/birds';
import bonusItems from './data/bonusItems';
import BirdCard from './BirdCard';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAdopt = (bird) => {
    setCartItems([...cartItems, bird]);
  };

  const handleDelete = (bird) => {
    let removed = false;
    const newItems = cartItems.filter((item) => {
      if (!removed && item.id === bird.id) {
        removed = true;
        return false;
      }
      return true;
    });
    setCartItems(newItems);
  };
  

  const handleCheckout = () => {
    setCartItems([]);
  };

  const total = useMemo(() => {
    const cartTotal = cartItems.reduce((acc, bird) => acc + bird.amount, 0);
    console.log('cartTotal:', cartTotal);
    return cartTotal;
  }, [cartItems]);
  
  const discount = useMemo(() => {
    const cartDiscount = cartItems.length >= 3 ? 0.1 : 0;
    console.log('cartDiscount:', cartDiscount);
    return cartDiscount;
  }, [cartItems]);
  

  const applicableBonusItems = useMemo(() => {
    const totalAfterDiscount = total * (1 - discount);
    let applicableBonuses = 0;

    if (totalAfterDiscount >= 1000) {
      applicableBonuses = 4;
    } else if (totalAfterDiscount >= 500) {
      applicableBonuses = 3;
    } else if (totalAfterDiscount >= 300) {
      applicableBonuses = 2;
    } else if (totalAfterDiscount >= 100) {
      applicableBonuses = 1;
    }

    return bonusItems.slice(0, applicableBonuses);
  }, [total, discount]);

  return (
    <div>
      <h1>Bird Sanctuary</h1>
      <div className="birds">
        {birdData.map((bird) => (
          <BirdCard key={bird.id} bird={bird} onAdopt={handleAdopt} />
        ))}
      </div>



<Cart
  cartItems={cartItems}
  total={total * (1 - discount)} // Pass the total after discount applied
  discount={discount}
  bonusItems={applicableBonusItems}
  onDelete={handleDelete}
/>




      <Checkout onCheckout={handleCheckout} />
    </div>
  );
}

export default App;



