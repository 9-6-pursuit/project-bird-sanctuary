function Cart({ cartItems, total, discount, bonusItems, onDelete }) {

  const handleDelete = (bird) => {
    onDelete(bird);
  };

  const displayTotal = total.toFixed(2);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.amount.toFixed(2)}{' '}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ol>
      <h4>
        Total: <span id="cart-total">${displayTotal}</span>
      </h4>
      <h4>Discount: {discount * 100}%</h4>
      <ul>
        {bonusItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
