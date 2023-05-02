import bonusItems from "../data/bonusItems";
import React from "react";

function Cart(props) {
  let discountedTotal = props.total;
  if (props.cart.length >= 3) {
    const discountAmount = (props.total * 10) / 100;
    discountedTotal = props.total - discountAmount;
  }

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <p>Discount: {props.cart.length >= 3 ? "10%" : "0%"}</p>
      <h4>
        <strong>Total: ${discountedTotal}</strong>
      </h4>
      <ol>
        {props.cart.map((item) => {
          return (
            <li key={item.id}>
              {item.name} ${item.amount}
              <br></br>
              <button
                className="button"
                onClick={() => {
                  props.handleDelete(item);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items:</p>
      <div className="Bonus">
        <ul>
          {props.total >= 100 ? <li>{bonusItems[0]}</li> : null}
          {props.total >= 300 ? <li>{bonusItems[1]}</li> : null}
          {props.total >= 500 ? <li>{bonusItems[2]}</li> : null}
          {props.total > 1000 ? <li>{bonusItems[3]}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default Cart;