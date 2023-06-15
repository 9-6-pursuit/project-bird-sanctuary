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

