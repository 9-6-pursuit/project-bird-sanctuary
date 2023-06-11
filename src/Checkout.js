import React, { useState } from 'react';

function Checkout({ clickSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    clickSubmit();
  };

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          First Name:
          <input type="text" value={firstName} onChange={handleFirstName} />
        </label>
        <label htmlFor="lastname">
          Last Name:
          <input type="text" value={lastName} onChange={handleLastName} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" value={email} onChange={handleEmail} />
        </label>
        <label htmlFor="zipcode">
          Zip Code:
          <input type="number" value={zipCode} onChange={handleZipCode} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;
