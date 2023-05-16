import React, { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addBird(bird) {
    const newCart = [...cart];
    newCart.push(bird);
    setCart(newCart);
  }

  function removeBird(i) {
    const newCart = [...cart];
    newCart.splice(i, 1);
    setCart(newCart);
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <>
      <main>
        <div className="cart">
          <Cart cart={cart} removeBird={removeBird} />
        </div>
        <div className="checkout">
          <Checkout resetCart={resetCart} />
        </div>
        <div className="birds">
          {birdData.map((bird) => {
            return <BirdCard addBird={addBird} bird={bird} />;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
