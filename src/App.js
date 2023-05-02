import React, { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import bonusItemsData from "./data/bonusItems";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newCartItem = { ...item, cartId: uuidv4() };
    setCartItems([...cartItems, newCartItem]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.cartId !== item.cartId));
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0);
  };

  const applyDiscount = (totalCost) => {
    if (cartItems.length >= 3) {
      return totalCost >= 3000 ? totalCost * 0.9 : totalCost;
    } else {
      return totalCost;
    }
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const discountedCost = applyDiscount(calculateTotalCost());
  const bonusItems = bonusItemsData.filter(
    (bonusItem) => discountedCost >= bonusItem.threshold
  );

  return (
    <div className="container">
      <h1 className="title">Adopt a Bird</h1>
      <div className="content-container">
        <div className="birds-container">
          {birdData.map((bird) => (
            <BirdCard key={bird.id + "-card"} bird={bird} addToCart={addToCart} />
          ))}
        </div>
        <div className="cart-checkout-container">
          <div className="cart-container">
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              calculateTotalCost={calculateTotalCost}
              applyDiscount={applyDiscount}
              discountedCost={discountedCost}
              bonusItems={bonusItems}
              resetCart={resetCart}
            />
          </div>
          <div className="checkout-container">
            <Checkout
              cartItems={cartItems}
              calculateTotalCost={calculateTotalCost}
              applyDiscount={applyDiscount}
              setCartItems={setCartItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;