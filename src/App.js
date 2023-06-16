import { useEffect, useState } from "react";
import BirdCard from "./components/BirdCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import bonusItems from "./data/bonusItems.js"
import "./App.css";

function App() {
  const [birdInCart, setBirdInCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [bonusItem, setBonusItem] = useState([]);
  const [message, setMessage] = useState("")

  const addToCart = (bird) => {
    const birdCartItem = {
        id: Math.random(),
        name: bird.name,
        price: bird.amount,
        image: bird.image,
    };
    //setBirdInCart(birdInCart.push(birdCartItem)) - this is not going to work because the push method returns the new length of an array & not the update array. Instead I have to use the spread operator

    setBirdInCart([...birdInCart, birdCartItem]);
    setTotal(total + birdCartItem.price);
    console.log(birdInCart)
  }

  const handleDiscount = () => {
    let discount = 0
// have to set discount to zero so that the discount can be applied correctly
    let totalPrice = birdInCart.reduce((acc, bird) => acc + bird.price, 0)

    if (birdInCart.length >= 3) {
      discount = .10 * totalPrice
    }
    setTotal(totalPrice - discount);
  }

//use useEffect to update the discount whenever the birdInCart array changes
  useEffect(() => {
    handleDiscount();
    handleBonusItem();
    //removeFromCart();
  }, [birdInCart, total]);

  const handleBonusItem = () => {
    let updatedMessage = "";
  
    if (total >= 100 && total < 300) {
      setBonusItem(bonusItems.slice(0, 1));
      updatedMessage = "Your donation has qualified you for the following item: ";
      console.log(bonusItem);
    } else if (total >= 300 && total < 500) {
      setBonusItem(bonusItems.slice(0, 2));
      updatedMessage = "Your donation has qualified you for the following items: ";
      console.log(bonusItem);
    } else if (total >= 500 && total < 1000) {
      setBonusItem(bonusItems.slice(0, 3));
      updatedMessage = "Your donation has qualified you for the following items: ";
      console.log(bonusItem);
    } else if (total >= 1000) {
      setBonusItem(bonusItems.slice());
      updatedMessage = "Your donation has qualified you for the following items: ";
      console.log(bonusItem);
    } else {
      updatedMessage = "Make a donation and receive a bonus item!";
      setBonusItem([]);
    }
    setMessage(updatedMessage);
  };

  const removeFromCart = (birdId) => {
    const updatedCart = birdInCart.filter((bird) => bird.id !==birdId);

    const removedBird = birdInCart.find((bird) => bird.id === birdId)
    if (removedBird) {
      setBirdInCart(updatedCart);
      setTotal(total-removedBird.price);
      handleBonusItem();//have to call this again to remove any unqualified bonuses when a bird is removed
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Noni's Bird Sanctuary</h1>
        <h2>Donate to adopt a bird</h2>
      </header>
      <div className="wrapper">
        <main className="right-column">
          <BirdCard 
            addToCart={addToCart}
            />
        </main>
        <aside className="left-column">
          <Cart 
            birdInCart={birdInCart} 
            total={total}
            message={message} 
            bonusItem={bonusItem}
            removeFromCart={removeFromCart}
          />
          <Checkout />
        </aside>
      </div>
    </div>
  )
}

export default App;
