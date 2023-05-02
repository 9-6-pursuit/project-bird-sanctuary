import { useState } from 'react'
import birdData from "./data/birds"


export default function BirdCards () {
    const [birds, setBirds] = useState(birdData)

    return (
        <div className="App">

      {
        birds.map((bird) => {
          return (
            <li className='card' key = {bird.id}>
              <img src = {bird.img} alt = {bird.name} height="200" width="300"/>
              <span>{bird.name}</span>
              <span> - ${bird.amount}</span>
              <button>Adopt Me</button>
            </li>
          )
        })
      }
    
        </div>
    )
}