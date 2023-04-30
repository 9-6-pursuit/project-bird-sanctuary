import React, { useState } from 'react';

export default function Checkout(props) {
  const { cartItems, calculateTotalCost, applyDiscount, setCartItems } = props;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate form inputs
    if (
      formState.name === '' ||
      formState.email === '' ||
      formState.address === '' ||
      formState.city === '' ||
      formState.state === '' ||
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={(event) =>
              setFormState({ ...formState, name: event.target.value })
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
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={formState.address}
            onChange={(event) =>
              setFormState({ ...formState, address: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={formState.city}
            onChange={(event) =>
              setFormState({ ...formState, city: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={formState.state}
            onChange={(event) =>
              setFormState({ ...formState, state: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="zip">Zip:</label>
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
