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
    <div>
      {birds.map((bird) => {
        return (
        <BirdCard 
        key={bird.id}
        bird = {bird}
        />
        )
      })}
    </div>
      
      <Cart />
      <Checkout />
    </>
  );
};

export default App;
