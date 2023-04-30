import React, { useState } from 'react';

function Checkout({ onCheckout }) {
  const [formCompleted, setFormCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormCompleted(true);
    onCheckout();
  };

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      {formCompleted ? (
        <p>Thank you for adopting birds!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Add your form inputs here */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
