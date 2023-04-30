// function App () {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// };

// export default App;

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

  const handleCheckout = () => {
    setCartItems([]);
  };

  const total = useMemo(() => {
    return cartItems.reduce((acc, bird) => acc + bird.amount, 0);
  }, [cartItems]);

  const discount = useMemo(() => {
    return cartItems.length >= 3 ? 0.1 : 0;
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
        total={total}
        discount={discount}
        bonusItems={applicableBonusItems}
      />
      <Checkout onCheckout={handleCheckout} />
    </div>
  );
}

export default App;

