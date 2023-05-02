import React from "react";


function Cart({itemsInCart, setItemsInCart, total, discount, bonusItems}) {
    // Declare an empty array to store bonus items based on the total
const bonuses = [];

// Define the function to handle removing items from the cart
function handleRemoveItem (index) {
    // Create a new cart array by filtering out the item with the specified index
    const newCart = itemsInCart.filter((item, i) => i !== index)

    // Update the state of itemsInCart with the new cart array
    setItemsInCart(newCart)
}

// Determine the bonus items based on the total
if (total >= 100 && total <= 300) {
  bonuses.push(bonusItems[0]);
}
if (total > 300 && total <= 500) {
  bonuses.push(bonusItems[0], bonusItems[1]);
}
if (total > 500 && total <= 1000) {
  bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2]);
}
if (total > 1000) {
  bonuses.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
}

return (
    <>
        <div className="cart">
            <h4>Cart</h4>
            <p>Discount {discount ? "10%" : "0%"}</p>
            <p>Total: ${total}</p>
            <ol>
                {itemsInCart.map((item, index) => {
                    return(
                        <li key={index}>
                            {item.name} ${item.amount}
                            <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
                        </li>
                    )
                })}
            </ol>
            <span>Your donation has qualified you for the following items:</span>
            <ul>
                {bonuses.map((bonus, index) => (
                    <li key={index}>{bonus}</li>
                ))}
            </ul>
        </div>
    </>
);

}

export default Cart