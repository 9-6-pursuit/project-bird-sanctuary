// import bonusItems from "../data/bonusItems";
import React from "react";
function Cart(bird) {
  return (
    <div className="Cart">
      <h1>Cart</h1>
      <p>Discount: {bird.discount}%</p>
      <h4>
        <strong>Total: ${bird.total}</strong>
      </h4>
      <ol>
        {bird.cart.map((item) => { return (
              <li key={item.id}>
                {item.name} ${item.amount}
                <br></br>
                <button className="button"
                onClick={() => {bird.handleDelete(item);}}> delete
              </button>
              </li>


          );
          })}
      </ol>
      
    </div>
  );
}

export default Cart;