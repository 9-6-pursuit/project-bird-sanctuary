import React, { useState } from 'react';

export default function Checkout(props) {
  const { cartItems, calculateTotalCost, applyDiscount, setCartItems } = props;

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zip: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate form inputs
    if (
      formState.firstName === '' ||
      formState.lastName === '' ||
      formState.email === '' ||
      formState.zip === ''
    ) {
      alert('Please fill out all fields.');
      return;
    }

    // perform purchase
    alert('You have adopted birds. Thank you!');

    // reset cart
    setCartItems([]);
  };

  const totalCost = calculateTotalCost();
  const discountedCost = applyDiscount(totalCost);

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formState.firstName}
            onChange={(event) =>
              setFormState({ ...formState, firstName: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={formState.lastName}
            onChange={(event) =>
              setFormState({ ...formState, lastName: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={(event) =>
              setFormState({ ...formState, email: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="zip">Zipcode:</label>
          <input
            type="text"
            id="zip"
            value={formState.zip}
            onChange={(event) =>
              setFormState({ ...formState, zip: event.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Total cost: ${totalCost}</p>
      {discountedCost !== totalCost && (
        <p>Discounted cost: ${discountedCost}</p>
      )}
    </div>
  );
}