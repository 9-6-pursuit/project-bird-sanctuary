function Cart({ selectedBirds, totalPrice, discount }) {
  

  return (
    <div className="cart-container">
      <div className="Cart">
        <h2>Cart</h2>
        <h4>Discount: {discount * 100}%</h4>
        <h4>Total: ${totalPrice}</h4>
        <ol>
          {selectedBirds.map((bird) => (
            <li key={bird.id}>
              {bird.name}: ${bird.amount}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Cart;
