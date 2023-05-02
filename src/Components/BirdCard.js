import React from "react";

function BirdCard({bird, itemsInCart, setItemsInCart, }) {

    // function for adding an item to the cart
    const handleAddToCart = () => {
        const birdData ={
            name: bird.name,
            amount: bird.amount
        }
    //  setItemsInCart: This is the function that sets the itemsInCart state in the parent component.
    // itemsInCart => [...itemsInCart, birdData]: This is the new state value that will be set for itemsInCart. It creates a new array with the existing itemsInCart values using the spread operator and adds a new object representing the bird that was clicked. The birdData object contains a name and an amount property that are derived from the bird prop passed down to the BirdCard component.
        setItemsInCart(itemsInCart => [...itemsInCart, birdData])
    }
    
    // returns the card for the bird item
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
