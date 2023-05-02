import React from 'react'
import { useState } from 'react';
import { v1 as generateUniqueID } from "uuid";


function Checkout(props) {


  const [checkoutForm, setCheckoutForm ] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  })

  function handleSubmit(e) {
    e.preventDefault();
    resetCheckoutForm();
  }

  function resetCheckoutForm() {
    setCheckoutForm ({ 
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
    });
  }

  function handleTextChange(e) {
    setCheckoutForm({
      ...checkoutForm,
      [e.target.id]: e.target.value,
    });
  }


  return (
    <div className='checkout'>
      <form className= "checkout" onSubmit={handleSubmit}>
        <h3>Checkout Here!</h3>
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          id="first-name"
          onChange={handleTextChange}
           />
   
       
        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          id="last-name"
          onChange={handleTextChange}
          / >
    
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={handleTextChange}
          />

        <label htmlFor="zip">Zip code:</label>
        <input
          type="number"
          id="zipcode"
          onChange={handleTextChange}
          />

        <input
        type="hidden"
        id="id"
        value={generateUniqueID()}
        />


        <input
        className='button'
        type="submit"
        content="Submit"
        onClick={() => {
          alert("You have adopted one or more birds. Thank you!");
          }} 
        />

        <p className="success-alert" id="success-alert"></p>
      </form>
    </div>
  )
}

export default Checkout
