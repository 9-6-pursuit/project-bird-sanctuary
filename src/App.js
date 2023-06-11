import React, { useState } from 'react';
import BirdCards from './BirdCards';
import Cart from './Cart';
import Checkout from './Checkout';
import birdsData from './data/birds';
import bonusItems from './data/bonusItems';
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleBirdAdopt = (bird) => {
    const updatedCartItems = [...cartItems, bird];
    setCartItems(updatedCartItems);

    const newTotalCost = totalCost + bird.amount;
    setTotalCost(newTotalCost);

    
    if (updatedCartItems.length >= 3) {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const handleBirdDelete = (bird) => {
    const updatedCartItems = cartItems.filter((item) => item !== bird);
    setCartItems(updatedCartItems);

    const newTotalCost = totalCost - bird.amount;
    setTotalCost(newTotalCost);

    
    if (updatedCartItems.length < 3) {
      setDiscount(0);
    }
  };

  const handleCheckout = () => {
   
    setCartItems([]);
    setTotalCost(0);
    setDiscount(0);
    
    alert('You have adopted birds. Thank you!');

  };

  return (
    <div className="App">
      <h1>Bird Sanctuary</h1>
      <div className="BirdCards">
        {birdsData.map((bird) => (
          <BirdCards key={bird.id} bird={bird} buyBird={handleBirdAdopt} />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        totalCost={totalCost}
        discount={discount}
        bonusItems={bonusItems}
        deleteBird={handleBirdDelete}
      />
      <Checkout clickSubmit={handleCheckout} />
    </div>
  );
}

export default App;
