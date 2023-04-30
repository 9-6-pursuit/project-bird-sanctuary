import React from "react";
import Bonus from "./Bonus";

export default function Cart({cartItems, setCartItems}){
    let total = 0;
     cartItems.map((bird) =>{
        total += bird.amount;
    }, 0)

    function removeBird(item){
        cartItems.splice(cartItems.indexOf(item),1)
        setCartItems([...cartItems])
    }

    const listBird =cartItems.map((item) =>{
        return(
            <li key={item.id}>
                {item.name}: ${item.amount}
                <button onClick={() => removeBird(item)} >remove</button>
            </li>
        )
    })

    let discount = 0
    if (cartItems.length >= 3){
        discount = 10
    }
    else{
        discount = 0
    }

    if (discount > 0){
        total = total - (total * (discount/100))
    }


    return (
        <aside className="Cart">
            <h3>Cart items</h3>
            <h4>Discount: {discount}%</h4>
            <h4> Total: ${total}</h4>
            {console.log(total)}
            <ol>{listBird}</ol>
            <span>Your donations has qualified you for the following items:</span>
            <ul>
                 <Bonus total={total} />
            </ul>
        </aside>
    )
}