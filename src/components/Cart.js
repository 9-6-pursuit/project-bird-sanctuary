import "../css/Cart.css";

export default function Cart({ birdInCart, total, message, bonusItem, removeFromCart }) {

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <ol>
                {birdInCart?.map((bird)=> ( 
                    <li key={bird.id}>
                        <p>{bird.name}: {bird.price}</p>
                        <button type="button" onClick={()=>{removeFromCart(bird.id)}}>Remove</button>
                    </li>
                ))}
            </ol>
            <h4>Cart Total: ${total}</h4>
            <p>{message}</p>
            <ul>
                {bonusItem.length > 0 && bonusItem.map((item, i)=> (
                    <li key={i}>
                        {item}
                    </li>))}
            </ul>
        </div>
    )
}