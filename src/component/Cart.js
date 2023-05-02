import React from "react";
// import { useEffect } from "react";
// import bonusItems from "./data/bonusItems";

function Cart({itemInCart, setItemInCart, total, discount, bonusItems}) {
    const bonuses = [];

    function handleRemoveItem (index) {
        const newCart = itemInCart.filter((item, i) => i !== index)

        setItemInCart(newCart)
    }

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
                <button className="remove-button" 
                onClick={() => handleRemoveItem(index)}>Remove</button>
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