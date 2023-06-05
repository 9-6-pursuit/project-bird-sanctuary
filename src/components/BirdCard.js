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


// /function BirdCard({birdArr, setCart, cart, setCartTotal}) {
//     return (
//       <div>
//           <div className='birds'>
//               {
//                   birdArr.map((bird) =>{
//                       return (
//                           <div className='card' key={bird.id}>
//                           <h2>{bird.name}</h2>
//                           <p>Price: ${bird.amount}</p>
//                           <img src={bird.img} />
//                           <button onClick={() => {
//                               let total = 0
//                               let totallyTotal;
//                              total = total + bird.amount
//                                setCart([...cart,{'amount': total, 'name': bird.name, 'idx': bird.id}])
//                               //  console.log(cart)
//                               totallyTotal = cart.reduce((a, b) => a + b.amount, total)
//                                setCartTotal(totallyTotal)
//                           }} >ADOPT A PET</button>
//                           </div>
//                       )
//                   })
//               }
//           </div>
//       </div>
//     )
//   }