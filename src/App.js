import birdData from './data/Birds.js'
// import { useState } from 'react';
import bonusItems from './data/bonusItems.js';
import BirdCards from './Bird-Cards.js';
import Checkout from './Checkout.js';
// import Cart from './Cart.js';
import "./App.css"

function App () {
  
 
  console.log(birdData,bonusItems)
  return (
   <div>
  <BirdCards 
  birdData = {birdData}
  />
  {/* <Cart/> */}
  <Checkout />
   </div>

  );
};

export default App;
