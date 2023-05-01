import React from "react";
// import { useEffect } from "react";
// import bonusItems from "./data/bonusItems";

function Cart({itemInCart, total, discount, bonusItems}) {
    const bonuses = [];

    if (total >= 100 && total <= 300) {
      bonuses.push(bonusItems[0]);
    }
    if (total > 300 && total <= 500) {
      bonuses.push(bonusItems[0], bonusItems[1]);
    }
    if (total > 500 && total <= 1000) {
      bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2]);
    }
    if (total > 1000) {
      bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
    }
  return (
  <>
  <div className="cart">
    <h4>Cart</h4>
    <p>Discount {discount ? "10%" : "0%"}</p>
    <p>Total: ${total}</p>
    <ol>
    {itemInCart.map((item, index) => {
        return(
            <li key={index}>
                {item.name} ${item.amount}
            </li>
        )
    })}
    </ol>

    <span>Your donation has quapfied you for the following items:</span>

    <ul>
        {bonuses.map((bonus, index) => (
        <li key={index}>{bonus}</li>
        ))}
    </ul>

  </div>
  </>
  );
}

export default Cart