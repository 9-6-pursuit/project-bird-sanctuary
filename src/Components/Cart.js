import { v1 as generateUniqueID } from "uuid";

function Cart(props) {

  let discount = props.cart.length > 2 ? 10 : 0;
  console.log("props.cart: ", props.cart);

    // Consider using filter to keep all the birds that DON'T have the id you are deleting. Using !==.
    // Make sure that the ids are not the same when they are added to the cart - changed keys to UUIDs
    // Make sure to add a delete button to each bird



  return (
    <>
    <div className="cart">
        <h3>Your Cart</h3>
        <ol>
        {props.cart.map((bird) => (
          <li key={generateUniqueID()}>{bird.name},   ${bird.amount} - <button className="deleteButton" id="deleteButton" onClick={() => props.deleteBird(bird)}>
          Delete This Bird
          </button></li>
        ))}
      </ol>

      {/* Display Bonus Items Earned */}
      <p> Bonus items earned: </p>
      <ul>
      {/* {props.funExtra.map((items) => (
         <li key={generateUniqueID()}> {items} </li> 
         ))} */}

      </ul> 
      
      <p></p>
      <p>
        Discount: <span id="discount-amount">{discount}%</span>
      </p>

      
        <h4>
          Total: $<span>{(discount === 0) ?  props.total : (props.total)*.9}</span>
        </h4>

        <p className="success-alert" id="success-alert"></p>
    </div>
  
</>
  )
}

export default Cart