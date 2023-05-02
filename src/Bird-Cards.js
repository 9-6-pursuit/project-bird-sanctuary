import { useState } from 'react';
export default function BirdCards ({birdData}) {
    let [bird, selectBird] = useState([]);

    function chooseBird(bird) {
      selectBird(bird);
    }
    console.log(birdData)
return (
   <div >
            {birdData.map((event) => {
              return (
        <div className="site">
            <div className="cards">
             <p1>{event.name}</p1>
             <p>Price: ${event.amount}</p>
             <img class="pic"src={event.img} alt="Bird"></img>
             <button onClick={()=> chooseBird(bird)} class="button">ADOPT</button>
            </div>
        </div>    
              )
            })}





   </div>
 )
};
