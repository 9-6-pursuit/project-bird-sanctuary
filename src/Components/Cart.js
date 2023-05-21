import birdData from "../data/birds";
import bonusItems from "../data/bonusItems";

export default function Cart({ cart, removeBird }) {
  // Can get the total for cart.

  let total = cart.reduce((initialValue, birdData) => {
    return birdData.amount + initialValue;
  }, 0);

  let discount = 0;

  // Applies 10% discount when 3 or more birds added.

  if (cart.length >= 3) {
    total = total - total * 0.1;
    discount = 10;
  }

  // No discount if total is less than 100.
  // 0% discount when 2 or less birds added.

  if (total <= 100 || cart.length <= 2) {
    discount = 0;
  }

  // Adds bonus items as the total increases.

  let bonuses = [];

  if (total >= 100) {
    bonuses.push(bonusItems[0]);
  }

  if (total >= 300) {
    bonuses.push(bonusItems[1]);
  }

  if (total >= 500) {
    bonuses.push(bonusItems[2]);
  }

  if (total >= 1000) {
    bonuses.push(bonusItems[3]);
  }

  return (
    <div className="Cart">
      <h3>Cart</h3>
      <h3>Discount: {discount}%</h3>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((bird, i) => (
          <li>
            {bird.name}: ${bird.amount}
            <br />
            <button onClick={() => removeBird(i)}>Remove Bird</button>
          </li>
        ))}
        {bonuses.map((bonus) => (
          <li>{bonus}</li>
        ))}
      </ol>
    </div>
  );
}
