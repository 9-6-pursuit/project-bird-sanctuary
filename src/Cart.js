import bonusItems from "./data/bonusItems";
import React from "react";
function Cart(props) {
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <p>Discount: {props.discount}%</p>
            <h4>
                <strong>Total: ${props.total}</strong>
            </h4>
            <ol>
            {props.cart.map((item) => {
                return (
                    <li key={item.id}>
                        {item.name} ${item.amount}
                        <br></br>
                        <button className="button"
                            onClick={() => { props.handleDelete(item);}}> delete
                        </button>
                    </li>
                );
            })}
            </ol>
            <p>Your donations has qualified you for the following items</p>
            <div className="Bonus">
                <ul>
                  {props.total >= 100 ? <li>{bonusItems[0]}</li>: null}
                  {props.total >= 100 ? <li>{bonusItems[1]}</li>: null}
                  {props.total >= 100 ? <li>{bonusItems[2]}</li>: null}
                  {props.total >= 100 ? <li>{bonusItems[3]}</li>: null}
            </ul>
            </div>
            </div>
    );
}

export default Cart;
