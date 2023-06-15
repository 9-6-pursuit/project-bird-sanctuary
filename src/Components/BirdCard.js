import React from 'react'
import '../App.css';

function BirdCard({birdArr, adoptBird}){
    return (
        <div className='birds'>
            {

                birdArr.map((bird) => {
                    return (
                        <div className='card' key={bird.id}>
                            <h2>{bird.name}</h2>
                            <p>Price: ${bird.amount}</p>
                            <img src={bird.img}/>
                            {/* ON CLICK, WE ARE ACCESSING THE ADOPT BIRD 
                            FUNCT, AND PASSING THRU THE WHOLE BIRD => [ACCESS LIST 
                            OF BIRDS IN CART] */}
                            <button onClick={() => adoptBird(bird)}>ADOPT A PET</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default BirdCard


// {birdData.map((bird) => {
//   return(
//     <div>
//     <h4>{bird.name}</h4>
//     <p>{bird.amount}</p>
//     <img className='adopt' src= {bird.img} alt= {`${bird.name}`}></img>
//     <button className='adopt' onClick={() => {
//       birdClick(bird)
//     }}> Adopt </button>
//     <div/>
//   )

// }) 