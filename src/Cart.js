import React from 'react';

function Cart({ cartItems, totalCost, discount, bonusItems, deleteBird }) {
  const handleBirdDelete = (bird) => {
    deleteBird(bird);
  };


  const addBonusItems = () => {
    let bonusAmount = 0;

    if ((totalCost*(1-(discount/100))) >= 100 && (totalCost*(1-(discount/100))) < 300) {
      bonusAmount = 1;
    } else if ((totalCost*(1-(discount/100))) >= 300 && (totalCost*(1-(discount/100))) < 500) {
      bonusAmount = 2;
    } else if ((totalCost*(1-(discount/100))) >= 500 && (totalCost*(1-(discount/100))) <= 1000) {
      bonusAmount = 3;
    } else if ((totalCost*(1-(discount/100))) > 1000) {
      bonusAmount = 4;
    }

    return (
      <ul>
        {bonusItems.slice(0, bonusAmount).map((bonus, index) => (
          <li key={index}>{bonus}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((bird) => (
          <li key={bird.id}>
            {bird.name} - ${bird.amount}
            <button onClick={() => handleBirdDelete(bird)}>Delete</button>
          </li>
        ))}
      </ul>
      <h4>Total Cost: ${totalCost*(1-(discount/100))}</h4>
      <p>Discount: {discount}%</p>
      <ul>
        {addBonusItems()}
      </ul>
    </div>
  );
}

export default Cart;
