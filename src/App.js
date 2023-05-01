// function App () {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// };

// export default App;


import { useState } from "react";
import birdData from "./data/birds";
import Bird from "./components/Bird";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (bird) => {
    const newBird = {
      id: Math.random(),
      name: bird.name,
      price: bird.amount,
      image: bird.img,
    };

    const newCart = cart.slice();
    newCart.push(newBird);
    setCart(newCart);
  };

  return (
    <div className="container">
      <h1>Bird Sanctuary</h1>
      <div className="columns">
        <div className="side-bar">
          <Cart cart={cart} setCart={setCart} />
          <Checkout setCart={setCart} />
        </div>
        <div className="cards">
          {birdData.map((bird) => (
            <Bird bird={bird} key={bird.id} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;