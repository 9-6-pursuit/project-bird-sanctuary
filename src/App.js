import { useState, useEffect } from "react";
import birdData from "./data/birds";
import BirdCard from "./components/BirdCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [birds, setBirds] = useState(birdData);
  const [selectedBirds, setSelectedBirds] = useState([]);
  const [discount, setDiscount] = useState(0);

  let totalPrice =
    selectedBirds.reduce((acc, bird) => acc + bird.amount, 0) * (1 - discount);

  const handleAdoption = (id) => {
    const selectedBird = birds.find((bird) => bird.id === id);

    const updatedBirds = birds.map((bird) => {
      if (bird.id === id) {
        return { ...bird };
      }
      return bird;
    });
    setBirds(updatedBirds);

    const birdInCartIndex = selectedBirds.findIndex((bird) => bird.id === id);

    if (birdInCartIndex !== -1 && selectedBirds[birdInCartIndex].quantity > 0) {
      const updatedSelectedBirds = [...selectedBirds];
      updatedSelectedBirds[birdInCartIndex].quantity += 1;
      updatedSelectedBirds[birdInCartIndex].amount =
        selectedBird.amount * updatedSelectedBirds[birdInCartIndex].quantity;
      setSelectedBirds(updatedSelectedBirds);
    } else {
      setSelectedBirds([
        ...selectedBirds,
        { ...selectedBird, amount: selectedBird.amount, quantity: 1 },
      ]);
    }
  };

  useEffect(() => {
    if (selectedBirds.length >= 3) {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  }, [selectedBirds]);

  useEffect(() => {
    if (selectedBirds.length < 3) {
      setDiscount(0);
    }
  }, [selectedBirds.length]);

  const handleRemoveFromCart = (id) => {
    const selectedBird = selectedBirds.find((bird) => bird.id === id);
  
    if (selectedBird) {
      const updatedSelectedBirds = selectedBirds
        .map((bird) => {
          if (bird.id === id) {
            if (bird.quantity > 1) {
              return { ...bird, quantity: bird.quantity - 1, amount: bird.amount - (bird.amount / bird.quantity) };
            } else {
              return null;
            }
          }
          return bird;
        })
        .filter(Boolean);
  
      setSelectedBirds(updatedSelectedBirds);
    }
  };
  
  

  return (
    <div>
      <main>
        <BirdCard birds={birds} handleAdoption={handleAdoption} />
        <Cart
          selectedBirds={selectedBirds}
          totalPrice={totalPrice}
          discount={discount}
          handleRemoveFromCart={handleRemoveFromCart}
        />
        <Checkout selectedBirds={selectedBirds} />
      </main>
    </div>
  );
}
export default App;
