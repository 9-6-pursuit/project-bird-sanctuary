import birdData from "./data/birds"
import { useState } from 'react'




function App () {
  const [birds, setBirds] = useState(birdData)
  console.log(birdData)

  return (
    <div className="App">
     <h1>Bird Sanctuary Project</h1>

    <ul>
      {
        birds.map((bird) => {
          return (
            <li key = {bird.id}>
              <span>{bird.img}</span>
              <span>{bird.name}</span>
              <span> - ${bird.amount}</span>
              <button>Adopt Me</button>
            </li>
          )
        })

      }
    </ul>


    </div>

  );
};

export default App;
