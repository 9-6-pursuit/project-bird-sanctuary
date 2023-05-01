import { useState } from "react";
import birdData from "./data/birds";
import Bird from "./components/Bird";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App () {
  const [birds] = useState(birdData)
  const [cartItems, setCartItems] = useState([])


  const addToCart = (bird) =>{
    setCartItems([...cartItems, bird])

  }

  return (
    <div>
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        <Checkout cartItems={cartItems} setCartItems={setCartItems}/>
      <ul className="birdBox">
        {birds.map((bird) => {
          
          return (
            <Bird 
            key={bird.id}
            bird={bird}
            addToCart={addToCart}/>
            )
            
          })}
      </ul>

    </div>
  );
};

export default App;
