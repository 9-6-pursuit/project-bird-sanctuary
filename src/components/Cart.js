import React, { useState, useEffect } from "react";
import bonusItems from "../data/bonusItems";

function Cart({ selectedBirds, totalPrice, discount }) {
  const [bonuses, setBonuses] = useState([]);

  useEffect(() => {
    let total = selectedBirds.reduce((acc, bird) => acc + bird.amount, 0);
    let bonusCount = 0;
    if (total >= 100 && total < 300) {
      bonusCount = 1;
    } else if (total >= 300 && total < 500) {
      bonusCount = 2;
    } else if (total >= 500 && total < 1000) {
      bonusCount = 3;
    } else if (total >= 1000) {
      bonusCount = 4;
    }
    setBonuses(bonusItems.slice(0, bonusCount));
  }, [selectedBirds]);

  return (
    <div className="cart-container">
      <div className="Cart">
        <h2>Cart</h2>
        <h4>Discount: {discount * 100}%</h4>
        <h4>Total: ${totalPrice}</h4>
        <ol>
          {selectedBirds.map((bird) => (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
            </li>
          ))}
        </ol>
        {bonuses.length > 0 && (
          <>
            <p><strong>Your donations have qualified you for the following items:</strong></p>
            <ul>
              {bonuses.map((bonus) => (
                <li key={bonus}>{bonus}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
