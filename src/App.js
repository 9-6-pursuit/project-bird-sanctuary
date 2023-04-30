import React from "react";
import { useState } from "react";
import birdData from "./data/birds";
import BirdCard from "./component/BirdCard";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

function App () {
  const [birds, setBirds] = useState(birdData)



  return (
    <>
    <main>
    <div className="cart-checkout">
      <Cart />
      <Checkout />
    </div>

    <div className="birds">
      {birds.map((bird) => {
        return (
        <BirdCard 
        key={bird.id}
        bird = {bird}
        />
        )
      })}
    </div>
    </main>
    </>
  );
};

export default App;
