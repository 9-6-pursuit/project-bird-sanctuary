import React, { useState } from 'react';

function Checkout(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const completeAdoption = (event) => {
    event.preventDefault();
    if (props.total === 0) {
      alert('Your cart is empty.');
    } else {
      alert(`You have adopted birds. Thank you, ${name}!`);
      setName('');
      setEmail('');
      props.onCheckout();
    }
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={completeAdoption}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;