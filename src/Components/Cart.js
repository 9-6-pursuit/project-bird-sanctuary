import { useState } from "react"

function Cart() {
    const [ cartContent, setCartContent ] = useState([])
    const [ cartTotal, setCartTotal ] = useState(null)
    const [ discount, setDiscount ] = useState(false)



  return (
    <div className="cart">
        <h3>Your Cart</h3>
        <ol>

        </ol>

    </div>
  )
}

export default Cart