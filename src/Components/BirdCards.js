
// import { useState } from 'react';
// import { v1 as generateUniqueID } from "uuid";
// import birdData from '../data/birds'


function BirdCards(props) {

  const { name, amount, img, id } = props;
  const priceInDollars = amount


  return (
    <div className="card">
      
      <h4>{ name }</h4>
      <p>price: {`$${priceInDollars}`}</p>
      <div className='image-box'>
        <img src={ img } alt={ `${name} profile pic` } />
      </div>
      <p>ID #{id}</p>
      <button className='birds' id='adopt' onClick="" >
        ADOPT
      </button>       
    </div>
  )
}

export default BirdCards



  // When this function is triggered, a new constant is created (addBird). addBird is an object in which most fields are populated by information in birdData from birds.js which has been imported. But instead of adding a new bird to the list, I am creating a copy of a bird to put in the cart. Is there a way to use the spread operator instead, where addBird = ...??

  // I was never able to really figure this out. I ended up putting the handleAdoptBird in App and passsing it down as props. Because the return is fine.


//Here is one of the confusing parts. Why do I need to spell out everything here if I am also spelling it out in BirdBoard? And how does deconstruction really work. I have to keep in mind that the deconstruction is something that is in service to and will be read by BirdBoard.js. 

//I ended up not using:   const [ birds, setBirds ] = useState([]); or       {/* <p id="key" className="key">key: {key}</p> */}