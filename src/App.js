import birdData from "./data/birds"
import React,{ useState } from "react";
import BirdCard from "./BirdCard";
import Cart from "./Cart"

function App () {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [bonus,setBonus] = useState([])
 

  function adoptBird(bird) {
    if (cart.includes(bird)) {
      bird = {...bird, id: +`${bird.id}${cart.length}`}
    }
    setCart([...cart, bird]); // setting the values in the cart
    console.log(bird)
    console.log(bird.amount)
    setTotal(total + bird.amount);
    // setTotal(prevTotal => prevTotal + bird.amount) 
    setBonus([...cart , bonus]);
    // console.log(cart)

    if (cart.length >= 2) { // this will determine the 10off if 3 or more birds added 
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
    <div class="mainDiv">

 <div className="card">
      {birdData.map((bird) => {
        return (
          <div key={bird.id}> 
           <BirdCard 
        bird = {bird}
        adoptBird = {adoptBird}
        />
          </div>
       
    
        )
      })} 
          </div>

          <Cart 
          cart={cart} 
          total={total} 
          discount={discount} 
          handleDelete={handleDelete}
          />

<div className="Checkout">
    <h4> Checkout</h4>     
    <label>First Name</label>
    <input/>
    <label> Last Name</label>
    <input/>
    <label>Email</label>
    <input/>
    <label>Zipcode</label>
    <input/>
    <br></br>
    <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>


    </div>
  );
};

export default App;
