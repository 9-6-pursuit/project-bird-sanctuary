
import bonusItems from "./data/bonusItems"

export default function Cart({cart,total, removeBird}) {
   
   let array = []
   if(total >= 100) {
    array.push(bonusItems[0])
   }
   if(total >= 300) {
    array.push(bonusItems[1])
   }
   if(total >= 500) {
    array.push(bonusItems[2])
   }
   if(total >= 1000) {
    array.push(bonusItems[3])
   }

   let discount = "0%"
   if(cart.length >= 3) {
    total = (total / 100) * 90
    discount = "10%"
   }
   return (
        <div className="Cart">
            <h2>Cart</h2>
            <h4>Discount: {discount}</h4>
            <h4>Total: ${total}</h4>
            <ol>
                {cart.map((bird,index) => {
                    return (
                        <li>
                            {bird.name}: ${bird.amount}
                            <button onClick={() => {
                                removeBird(bird, index)
                            }}>
                                Remove
                            </button>
                         </li>
                    )
                })}
            </ol>
            <p>Your donations has qualified for the following items</p>
            <ul>
                {array.map((a) => {
                    return <li id="prizes">{a}</li>
                })}
            </ul>
        </div>
   )
}