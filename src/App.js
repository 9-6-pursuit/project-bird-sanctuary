import React, { useState, useEffect } from 'react';
import birdData from './data/birds';
import BirdCard from './components/BirdCard'
import Cart from './components/Cart';
// import bonusItems from './data/bonusItems'
import Checkout from './components/Checkout';

// App component
const App = () => {

  const [birdCart, setBirdCart] = useState([])
  // const [extraItems, setExtraItems] = useState([])
  
  // function handleBonusItems(item){
  //   setExtraItems([...extraItems,item])
  // }
  
  function handleCartItems(bird) {
    setBirdCart([...birdCart,bird])
  }

  

  const birds = birdData.map(bird => {
    return <BirdCard bird={bird} 
    handleCartItems={handleCartItems}
    ></BirdCard>
  })

  return (
    <div>
      {birds}
      <Cart birdCart={birdCart}></Cart>
    </div>
    );
  };

export default App;
