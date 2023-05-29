import React from "react";
import "./App.css"
import {useState} from  "react";
import { v1 as generateUniqueID } from "uuid";

import Cart from "./Components/Cart";
import BirdBoard from "./Components/BirdBoard";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems"
// import birdData from "./data/birds";


function App () {
 const [ cart, setCart ]  = useState([]);
 const [ cartTotal, setCartTotal ]  = useState(0);
 const [ funExtra, setFunExtra ]    = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [ birds, setBirds ] = useState([]);



 function getBonusItems(cartTotal) {
   if (cartTotal >= 100 && cartTotal < 300) {
     setFunExtra([bonusItems[0]]);
   } else if (cartTotal >= 300  && cartTotal < 500) {
     setFunExtra( [bonusItems[0], bonusItems[1]]);
   } else if (cartTotal >= 500 && cartTotal < 1000) {
     setFunExtra( [bonusItems[0], bonusItems[1], bonusItems[2]]);
   } else if (cartTotal >= 1000) {
     setFunExtra(bonusItems);
   }
   console.log("Birds after bonus items ",birds)
 }

   function handleAdopt(birds) {

    const newBird = { ...birds, key: generateUniqueID() };

    
    setCart([...cart, newBird]);
    setCartTotal( prevTotal => prevTotal + birds.amount);

    getBonusItems(cartTotal + birds.amount);

    console.log("Adopt button clicked");
    console.log("bird.amount:", birds.amount)
    console.log("cartTotal", cartTotal)
    console.log("new total", cartTotal+birds.amount)
    console.log (funExtra)
    console.log("bird is ", birds, "key is " , birds.key)
    console.log("Birds after adopt",birds)
    }

      function deleteBird(badBird) {
        console.log(Object.keys(badBird))
        const filteredCart=cart.filter((item)=>(item.key !== badBird.key))
        setCart(filteredCart);
        setCartTotal(cartTotal-badBird.amount)
      }
        

  return (
    <div>
      <header>
        <h1>The Bird Sanctuary</h1>
      </header>
      <section className="layout">
          <BirdBoard cart={cart} setCart={setCart}  cartTotal={cartTotal} setCartTotal={setCartTotal} handleAdopt={handleAdopt} />
        </section>


        <Cart cart={cart} setCart={setCart} total={cartTotal} setCartTotal={setCartTotal} birds={birds} deleteBird={deleteBird} funExtra = {funExtra}/>
        <Checkout />


      <footer className="footer">after these messages, we'll be right back</footer>
    </div>
  );
};

export default App;   