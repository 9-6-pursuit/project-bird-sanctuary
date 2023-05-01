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
  const bonusItems = bonusItemsData.filter(
    (bonusItem) => discountedCost >= bonusItem.threshold
  );

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
              <li key={bonusItem.id}>{bonusItem.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
