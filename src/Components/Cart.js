export default function Cart({ cartItems, removeFromCart, calculateTotalCost, applyDiscount }) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
      <h4>Total: ${applyDiscount(calculateTotalCost()).toFixed(2)}</h4>
    </div>
  );
}
