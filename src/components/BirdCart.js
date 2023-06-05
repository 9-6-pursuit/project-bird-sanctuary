import React from 'react'
import bonusItems from '../data/bonusItems'
import { useState, useEffect } from 'react'

function BirdCart({listOfBirds, cartTotal, cart, discount, bonus, deleteBird}) {
       const formatPrice = (price) => price.toFixed(2);

    return (
        <div className='Cart'>
            <h3>Cart</h3>
            <p>Discount: {discount}%</p>
            <h4>Total: ${cartTotal}</h4>
            <ol>
                {
                    listOfBirds.map((bird, index) => {
                        return (
                            <li key={bird.id + index}>
                            {bird.name}: ${formatPrice(bird.amount)}
                            <button onClick={() => deleteBird(index)}>delete</button>
                          </li>
                        )
                    })
                }
            </ol>
            <p>Your donations have qualified you for the following items:</p>

        </div>
    )

}

export default BirdCart

    // let extraArr = [];
    // let extra;
    // let extraExtra;
    // let extraExtraextra;
    // let extraExtraextraExtra;

    // if(cartTotal >= 100 && cartTotal <= 300){
    //      extra = bonusItems.filter((b, idx) => idx < 1);
    //      extraArr.push(extra);
    //     // console.log(extra)
    // } else if(cartTotal >= 300 && cartTotal <= 500){
    //     extra = bonusItems.filter((b, idx) => idx < 1);
    //     extraExtra = bonusItems.filter((b, idx) => idx === 1);
    //     extraArr.push(extra, extraExtra);
    //     // console.log(extraArr)
    // } else if(cartTotal >= 500 && cartTotal <= 1000){
    //     extra = bonusItems.filter((b, idx) => idx < 1);
    //     extraExtra = bonusItems.filter((b, idx) => idx === 1);
    //     extraExtraextra = bonusItems.filter((b, idx) => idx === 2);
    //     extraArr.push(extra, extraExtra, extraExtraextra);
    //     // console.log(extraArr)
    // } else if(cartTotal >= 1000) {
    //     extra = bonusItems.filter((b, idx) => idx < 1);
    //     extraExtra = bonusItems.filter((b, idx) => idx === 1);
    //     extraExtraextra = bonusItems.filter((b, idx) => idx === 2);
    //     extraExtraextraExtra = bonusItems.filter((b, idx) => idx === 3);
    //     extraArr.push(extra, extraExtra, extraExtraextra, extraExtraextraExtra);
    //     // console.log(extra)
    // }
   
    
   
    // useEffect(() => {
    //     setBonus([<div><ul>{extraArr.map((ex) => {
    //         return <li>{ex}</li>
    //     })}</ul></div>]);
    //     // console.log(bonus)
    // }, [cart])




//   return (
//     <div className='Cart'>
        

//         <h3>Cart</h3>
//         <p>Discount: {cart.length >= 3 ? discount : '0'}%</p>
//         <h4>Total: ${cartTotal}</h4>
//         <ol>
//             {
//                 cart.map((item) => {
//                    return <li key={item.idx}>{item.name}: ${item.amount}<button onClick={() => deleteBird(item.idx)}>Remove</button></li>
//                 })
//             }
//         </ol>
//         <p>Your donations have qualified you for the following items:</p>
//         <div>
//             {bonus}
//         </div>
        
//     </div>
//   )