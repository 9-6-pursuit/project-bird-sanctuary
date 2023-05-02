import { useState } from "react";
import birdData  from './data/birds.js'
import Card from "./card.js";
import BirdForm from "./checkout.js"; 
import Cart from "./cart.js";



function App () {
  const [birds, setBirds] = useState(birdData)
  const [birdCart, setBirdCart] = useState([])


  function handleCart(bird) {
    setBirdCart([...birdCart, bird])
  }


  function handleAddBird(bird) {
    setBirds([bird, ...birds])
  }
  
  // function handleTextChange(e) {
  //   set
  // }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="App">
      <main>

   



      {birdData.map(data =>
       <Card 
        bird={data}
        handleCart={handleCart}
       
       />
        )}


      <BirdForm
      handleSubmit={handleSubmit}
      />
     
      <Cart 
        birdCart={birdCart}
      />
      
      


    </main>
    </div>

    
   

  );
};

export default App;
