// import { useState } from 'react';
import { v1 as generateUniqueID } from "uuid";
import BirdCards from "./BirdCards"
import birdData from '../data/birds'

// We are getting the data from birdData and maps over it to create an array of Bird cards, passing each bird's information as props. But I also added a key which equals a UUID. However, that woukd really only be needed in a list item I think, so I will get rid of it for now
//i put it back in as uid. May22


function BirdBoard({handleAdopt}) {

//guard clause for if there are no birds
  if (!birdData) { 
    return null;
   };

  return (
    <div className='birdBoard layout'>
        <div className='card birds bird'>

        {birdData.map((bird) => (
            <BirdCards 
              handleAdopt = { handleAdopt } 
              uid =   { generateUniqueID }
              name =  { bird.name }
              id =    { bird.id }
              img =   { bird.img }
              amount = { bird.amount }
              bird =  {bird}
              />
            ))}
        </div>
    </div>
  )
}

export default BirdBoard

/* 

5/23/23

I am getting rid of the UID here. I don't need it until the chosen bird goes into the cart.
          
// {birdData.map((bird) => (
          //   <BirdCards 
          //     handleAdopt={ handleAdopt } 
          //     key =   { generateUniqueID }
          //     name =  { bird.name }
          //     id =    { bird.id }
          //     img =   { bird.img }
          //     amount = { bird.amount }
          //     bird =  {bird}
          //     />
          //   ))}

        )} 
        
        
                <div className='card birds bird'>

        {birdData.map((bird) => (
          <>
            <h4>{ bird.name }</h4>
            <p>price: {`$${bird.amount}`}</p>
            <div className='image-box'>
              <img src={ bird.img } alt={ `${bird.name} profile pic` } />
            </div>
            <p>ID #{bird.id}</p>
            <p>key: { generateUniqueID() }</p>
            <button className='birds' id='adopt' onClick={ handleAdopt } >
              ADOPT
            </button>  
          </>
        ))}
        </div>
        
        
        
        ======================
        got rid of the key=uuid in BirdCards. I only want that in the cart
        
        
        
        
        */