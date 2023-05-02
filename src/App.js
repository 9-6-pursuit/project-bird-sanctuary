import React from "react";
import { useState, useEffect } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems"
import BirdCard from "./component/BirdCard";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

function App () {
  const [itemInCart, setItemInCart] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(false)

  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < itemInCart.length; i++) {
      totalPrice += itemInCart[i].amount;
    }
    if (itemInCart.length >= 3) {
      totalPrice = totalPrice * .9
      setDiscount(true)
    } 
    setTotal(totalPrice);
  }, [itemInCart]);

  return (
    <>
    <main className="main-container">
    <h1>Bird Sanctuary</h1>
    <hr/>
    <div className="column-card">
      <div className="left-column">
        
        <Cart
        itemInCart = {itemInCart}
        setItemInCart = {setItemInCart}
        total = {total}
        discount = {discount}
        bonusItems = {bonusItems}
        />
        <Checkout />
        
      </div>

      <div className="cards">
        {birdData.map((bird) => {
          return (
          <BirdCard 
          key={bird.id}
          bird = {bird}
          itemInCart = {itemInCart}
          setItemInCart= {setItemInCart}
          />
          )
        })}
      </div>
    </div>
    </main>
    </>
  );
};



export default App;