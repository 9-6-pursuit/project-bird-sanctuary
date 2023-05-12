import {useState} from  "react";
// import { v1 as generateUniqueID } from "uuid";
// import birdData from "./data/birds";
import Cart from "./Components/Cart";
import BirdBoard from "./Components/BirdBoard";
import Checkout from "./Components/Checkout";
import "./App.css"
import bonusItems from "./data/bonusItems"

function App (props) {
 const [ cart, setCart ] = useState([]);
 const [ cartTotal, setCartTotal ] = useState(null);
 
 // eslint-disable-next-line no-unused-vars
 const [funExtras, setFunExtras] = useState([]);

 // eslint-disable-next-line no-unused-vars
const [ birds, setBirds ] = useState([]);


 function getBonusItems(total) {
   if (total >= 100 && total < 300) {
     setFunExtras([bonusItems[0]]);
   } else if (total >= 300  && total < 500) {
     setFunExtras( [bonusItems[0], bonusItems[1]]);
   } else if (total >= 500 && total < 1000) {
     setFunExtras( [bonusItems[0], bonusItems[1], bonusItems[2]]);
   } else if (total >= 1000) {
     setFunExtras( bonusItems);
   }
 }

   function handleAdopt(bird) {
      setCart([...cart, bird ])
      setCartTotal(cartTotal=>cartTotal+bird.amount);
      getBonusItems(bird.amount+cartTotal);

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
        <Cart cart={cart} setCart={setCart} cartTotal={cartTotal} setCartTotal={setCartTotal} birds={birds} deleteBird={deleteBird} />
        <Checkout />
        <BirdBoard cart={cart} setCart={setCart}  cartTotal={cartTotal} setCartTotal={setCartTotal} handleAdopt={handleAdopt} />

      <footer className="footer">after these messages, we'll be right back</footer>
    </div>
  );
};

export default App;   