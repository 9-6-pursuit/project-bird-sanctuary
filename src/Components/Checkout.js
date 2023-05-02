import React from 'react'
import { useState } from 'react';
import { v1 as generateUniqueID } from "uuid";


function Checkout() {


  const [checkoutForm, setCheckoutForm ] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
  })

  function handleSubmit(e) {
    e.preventDefault();
    //addEvent();
    resetCheckoutForm();
  }

  function resetCheckoutForm() {
    //setNewForm
  }

  function handleTextChange(e) {

  }
  return (
    <div className='checkout'>
      <form onSubmit={handleSubmit}>
        <h3>Checkout Here!</h3>
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          id="first-name"
          onChange={handleTextChange}
          value="">
        </input>
       
        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          id="last-name"
          onChange={handleTextChange}
          value="">
        </input>        
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          onChange={handleTextChange}
          value=""
          />

        <label htmlFor="zip">Zip code:</label>
        <input
          type="number"
          id="zipcode"

          onChange={handleTextChange}
          value=""
          />

        <input
        type="hidden"
        id="id"
        value={generateUniqueID}
        />
      </form>
    </div>
  )
}

export default Checkout



/*

    id: "",
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",

    */