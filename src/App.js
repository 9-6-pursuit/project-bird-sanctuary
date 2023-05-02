import {useState} from  "react";
// import { v1 as generateUniqueID } from "uuid";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import BirdBoard from "./Components/BirdBoard";
import Checkout from "./Components/Checkout";
import "./App.css"
import bonusItems from "./data/bonusItems"

function App (props) {
 const [ cart, setCart ] = useState([]);
 const [ cartTotal, setCartTotal ] = useState(null);
 const [funExtras, setFunExtras] = useState([]);


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
      
      console.log(cart, bird, "Adopt button clicked");
      console.log(bird.amount, "is the amount")
      console.log(cartTotal+bird.amount)
      console.log (funExtras)
      console.log("bird ", bird, " birddata is ", birdData, "id is ", bird.id, "key is " , bird.key)
  
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


// Didn't Use:

    
    // const [ discount, setDiscount ] = useState(false);
    // const [ buyingBirds, setBuyingBirds ] = useState([]);

    // const wantedBirds = [...buyingBirds];
    // //const birdIndex = wantedBirds.findIndex(bird)( birdID === birdData.id);
    // //const bird = {...wantedBirds[birdIndex]};

    // let sum = 0
    // // Taking my discount from the last time I did this to see if this will help

    // let discount = props.cart.length >2 ? 10: 0;
    // console.log("props.discount: ", props.discount)
