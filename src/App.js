import "./App.css";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import React, { useState } from "react";
import BirdCard from "./Components/BirdCard";
import Checkout from "./Components/Checkout";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bonus, setBonus] = useState([])
  

  // passing Birdcard info to cart

  function adoptMe(bird) {
    if (cart.includes(bird)){
      bird = {...bird, id: +`${bird.id}${cart.length}`}
    }
    setCart([...cart, bird]);
    setTotal(total + bird.amount);
    setBonus([...cart , bonus]);
    console.log(cart)
    
    if (cart.length >= 2) {
      setDiscount(10);
    } 
  }

  function handleDelete(bird) {
    const newCart = cart.filter((cartBird) => bird.id !== cartBird.id);
    setCart(newCart);
    setTotal(total - bird.amount)
    console.log(newCart)
    if (cart.length +1 < 3){
      setDiscount(0)
    }
  }
  function handleSubmit(event){
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    cartReset()
  }
  const cartReset = () => {
    setTotal(0);
    setCart([]);
    setDiscount([]);
    setBonus([]);
   }

  return (
    <div className="App">
      <div className="card">
        {birdData.map((bird) => {
          return (
            <div key={bird.id}>
              <BirdCard
                name={bird.name}
                image={bird.img}
                amount={bird.amount}
                adoptMe={adoptMe}
                bird={bird}
              />
            </div>
          );
        })}
      </div>
      <div className="left">
        <div className="CartItems">
          <Cart 
          cart={cart} 
          total={total} 
          discount={discount} 
          handleDelete={handleDelete}
          />
        </div>
        <div className="Checkout">
          <Checkout
           handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
export default App;