import React from "react";
import "./App.css"
import {useState} from  "react";

import Cart from "./Components/Cart";
import BirdBoard from "./Components/BirdBoard";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems"
import birdData from "./data/birds";


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
 }

   function handleAdopt(birds) {

      setCart([...cart, birds])
      setCartTotal( cartTotal => birds.amount + cartTotal);

      getBonusItems(birds.amount+cartTotal);

      console.log(cart, birds, "Adopt button clicked");
      console.log(birds.amount, "is the amount")
      console.log(cartTotal+birds.amount)
      console.log (funExtra)
      console.log("bird ", birds, " birddata is ", birdData, "id is ", birds.id, "key is " , birds.key)


      }

      function deleteBird(badBird) {
        const filteredCart=cart.filter((item)=>(badBird.id !== item.id))
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


        <Cart cart={cart} setCart={setCart} cartTotal={cartTotal} setCartTotal={setCartTotal} birds={birds} deleteBird={deleteBird} />
        <Checkout />


      <footer className="footer">after these messages, we'll be right back</footer>
    </div>
  );
};

export default App;   