import { useState } from "react"
import birdData from "../data/birds";

function Cart() {
    const [ cartContent, setCartContent ] = useState([]);
    const [ cartTotal, setCartTotal ] = useState(null);
    const [ discount, setDiscount ] = useState(false);
    const [ buyingBirds, setBuyingBirds ] = useState([]);

    const wantedBirds = [...buyingBirds];
    //const birdIndex = wantedBirds.findIndex(bird)( birdID === birdData.id);
    //const bird = {...wantedBirds[birdIndex]};



  return (
    <div className="cart">
        <h3>Your Cart</h3>
        <ol>

        </ol>

    </div>
  )
}

export default Cart