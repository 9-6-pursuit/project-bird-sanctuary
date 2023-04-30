import { useState } from "react";
import birdData from "./data/birds";

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
        <ul className="birds-list">
          {birds.map((bird) => (
            <li key={bird.id} className="bird-card">
              <h2>{bird.name}</h2>
              <p>Price: ${bird.amount}</p>
              <img src={bird.img} alt={bird.name} />
              <button onClick={() => handleAdoption(bird.id)}>
                {" "}
                {bird.adopted ? "Adopted" : "Adopt"}
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
