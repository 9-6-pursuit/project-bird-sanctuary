import { useState } from "react";
import birdData from "./data/birds";
import BirdCard from "./components/BirdCard";

function App() {
  const [birds, setBirds] = useState(birdData);

  function handleAdoption(id) {
    setBirds((prevState) =>
      prevState.map((bird) => {
        if (bird.id === id) {
          return { ...bird, adopted: !bird.adopted };
        }
        return bird;
      })
    );
  }

  return (
    <div>
      <main>
        <BirdCard birds={birds} handleAdoption={handleAdoption} />
      </main>
    </div>
  );
}

export default App;
