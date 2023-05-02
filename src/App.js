import birdData from "./data/birds"
import { useState } from 'react'
import BirdCards from "./BirdCards"
import Checkout from "./Checkout"





function App () {
  const [birds, setBirds] = useState(birdData)
  // console.log(birdData)
  
  return (
    <div className="App">
      <h1>Bird Sanctuary Project</h1>

    <ul>
    <BirdCards />
    </ul>

    <Checkout />
    </div>

  );
};

export default App;
