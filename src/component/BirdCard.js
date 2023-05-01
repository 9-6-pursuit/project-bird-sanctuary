import React from "react";
// import useState from "react"

function BirdCard({bird, itemInCart, setItemInCart, }) {

    const handleAddToCart = () => {
        const birdData ={
            name: bird.name,
            amount: bird.amount
        }
        setItemInCart(itemInCart => [...itemInCart, birdData])

    }

    
    return (
        <>
            <ul className="card">
                <p class="name">{bird.name}</p>
                <p>Price: ${bird.amount}</p>
                <img src={bird.img} alt={bird.name} />
                <button onClick = {handleAddToCart}>Adopt</button>
            </ul>
        </>
    );
}
  

export default BirdCard