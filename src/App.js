import birdData from "./data/birds";
import { useState, useEffect } from "react";
import BirdCard from "./components/BirdCard";
import BirdCart from "./components/BirdCart";
import bonusItems from "./data/bonusItems";
import Checkout from "./components/Checkout";

function App () {
  const [listOfBirds, setListOfBirds] = useState([]);
  const [birdArr, setBirdArr] = useState(birdData);
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(10);
  const [bonus, setBonus] = useState();

  //PASS THRU BIRD AND ADD IT TO THE LIST OF BIRDS
  const adoptBird = (bird) => {
    const adoptedBirdList = [bird, ...listOfBirds];
    setListOfBirds(adoptedBirdList);
  }

  const deleteBird = (index) => {
    const updatedBirdList = [...listOfBirds];
    updatedBirdList.splice(index, 1);
    setListOfBirds(updatedBirdList);
  };

  useEffect(() => {
    let total = sumTotal(listOfBirds);
    setBonus(getBonuses(total));
  }, [listOfBirds]);
  const completePurchase = () => {
    alert("You have adopted birds. Thank you!");
    setListOfBirds([]);
  };

  const getBonuses = (total) => {
    let numOfBonuses = 0;
    let bonusList = [];
    if (total >= 100 && total < 300) {
      numOfBonuses = 1;
    } else if (total >= 300 && total < 500) {
      numOfBonuses = 2;
    } else if (total >= 500 && total < 1000) {
      numOfBonuses = 3;
    } else if (total >= 1000) {
      numOfBonuses = 4;
    }

    for (let i = 0; i < numOfBonuses; i++) {
      bonusList.push(bonusItems[i]);
    }
    return bonusList;
  };
  
  const sumTotal = (cart) => {
    let sum = 0;
    for (let item of cart) {
      sum += item.amount;
    }

    if (cart.length >= 3) {
      sum = sum * 0.9;
      setDiscount(10);
    } else {
      setDiscount(0);
    }
    getBonuses(sum);
     return setCartTotal(sum);
  };




  return (
    <div>
      <h1>{cartTotal}</h1>
      <BirdCart  
      listOfBirds={listOfBirds}
      cartTotal={cartTotal} 
      birdArr={birdArr} 
      discount={discount}
      bonus={bonus}
      deleteBird={deleteBird}
      />

      <Checkout completePurchase={completePurchase}
      />

      <BirdCard 
      birdArr={birdArr}  
      adoptBird={adoptBird}

      />
    </div>
  );
};

export default App;
