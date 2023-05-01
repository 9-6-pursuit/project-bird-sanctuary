import { useEffect, useState } from "react";
import Bonus from "./Bonus";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach(item => {
      sum += item.price;
    });
    setTotal(sum);
  }, [cart]);

  const removeItem = (id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h2>Discount: {cart.length >= 3 ? 10 : 0}%</h2>
      <h4>Total: ${total} </h4>

      <ol>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            {name}: ${price}
            <button onClick={() => removeItem(id)}>
              <span className="remove">X</span>
            </button>
          </li>
        ))}
      </ol>

      <p>You donation has qualified you for the following items:</p>
      <ul>
        <Bonus total={total} />
      </ul>
    </div>
  );
};

export default Cart;
