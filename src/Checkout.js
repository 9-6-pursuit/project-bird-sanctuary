import { useState } from "react";

export default function Checkout() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
   
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
      setFullName(e.target.value + ' ' + lastName);
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value);
      setFullName(firstName + ' ' + e.target.value);
    }
    return (
  
      <>
            <form >
              <h3>Checkout</h3>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                onChange={handleTextChange}
                value={newEvent.firstName}
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                onChange={handleTextChange}
                value={newEvent.lastName}
              />

              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={handleTextChange}
                value={newEvent.eventImage}
              />
              <label htmlFor="zipCode">Zip Code</label>
              <select id="zip" onChange={handleSelectChange}>
                <option value=""></option>
              </select>
              <br />
              <input type="submit" />
            </form>
        </>    
    );
  }