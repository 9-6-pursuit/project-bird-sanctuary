import React from "react";
import bonusItemsData from "../data/bonusItems";

export default function Cart({
  cartItems,
  removeFromCart,
  calculateTotalCost,
  applyDiscount,
}) {
  const totalCost = calculateTotalCost();
  const discount = cartItems.length >= 3 ? 0.1 : 0;
  const discountedCost = applyDiscount(totalCost, discount);

  let bonusCount = 0;
  let bonusIndex = 0;
  if (discountedCost >= 100 && discountedCost < 300) {
    bonusCount = 1;
    bonusIndex = 0;
  } else if (discountedCost >= 300 && discountedCost < 500) {
    bonusCount = 2;
    bonusIndex = 1;
  } else if (discountedCost >= 500 && discountedCost < 1000) {
    bonusCount = 3;
    bonusIndex = 2;
  } else if (discountedCost >= 1000) {
    bonusCount = 4;
    bonusIndex = 3;
  }
  const bonusItems = bonusItemsData.slice(bonusIndex, bonusIndex + bonusCount);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item.cartId}>
            {item.name}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ol>
      <h4>
        Total: ${discountedCost.toFixed(2)} ({discount * 100}% discount applied)
      </h4>
      {bonusItems.length > 0 && (
        <div>
          <h4>Bonus Items:</h4>
          <ul>
            {bonusItems.map((bonusItem) => (
              <li key={bonusItem}>{bonusItem}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
