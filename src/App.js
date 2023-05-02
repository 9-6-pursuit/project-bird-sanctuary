// Import React and necessary components
import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import BirdCard from "./Components/BirdCard";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems"

// Define the main App component
function App () {
  // Set up state variables for items in cart, total price, and whether a discount is applied
  const [itemsInCart, setItemsInCart] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(false)

  // Use useEffect to update the total price and apply a discount if necessary
  useEffect(() => {
    // initialize the newTotal to 0
    let newTotal = 0;
    // iterate through each item in the cart
    for (let i = 0; i < itemsInCart.length; i++) {
      // add up the amount of each item to compute the newTotal
      newTotal += itemsInCart[i].amount;
    }
    // apply the discount if there are 3 or more items in the cart
    if (itemsInCart.length >= 3) {
      newTotal = newTotal * .9
      // discount state is true as a result of cart having 3 or more items.
      setDiscount(true)
    } 
    // update the total state with the newTotal
    setTotal(newTotal);
  }, [itemsInCart]);
  

  // Render the components for the shopping cart and checkout, as well as the bird cards
  return (
    <>
    <main>
    <div className="cart-checkout">
      <Cart 
      itemsInCart = {itemsInCart}
      setItemsInCart = {setItemsInCart}
      total = {total}
      discount = {discount}
      bonusItems = {bonusItems}
      />
      <Checkout />
    </div>

    <div className="birds">
      {birdData.map((bird) => {
        return (
        <BirdCard 
        key={bird.id}
        bird = {bird}
        itemsInCart = {itemsInCart}
        setItemsInCart= {setItemsInCart}
        />
        )
      })}
    </div>
    </main>
    </>
  );
};


export default App;
