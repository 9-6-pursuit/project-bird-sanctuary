import React from "react";
import { useState } from "react";
import birdData  from './data/birds.js'
import Cards from "./card.js";
import Checkout from "./checkout.js"; 
import Cart from "./cart.js";
import "./App.css"



function App () {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)


  function handleCart(bird) {
    setTotal(total + bird.amount) 
    setCart([...cart, bird])
  }
  
 function removeBird(bird, index) {
  const foundBird = cart.find(bird2 => bird2.id === bird.id)
  const newCartPage = [...cart]
  newCartPage.splice(index, 1)
  setCart(newCartPage)
  setTotal(total - foundBird.amount)
 }


  return (
    <div className="card">
      <Cards handleCart={handleCart} birdData={birdData} />
      <Cart cart={cart} total={total} removeBird={removeBird} />
      <Checkout />
    </div>

    
   

  );
};

export default App;
