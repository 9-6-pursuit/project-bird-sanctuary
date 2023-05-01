import React from "react";

function Checkout() {
  function handelSubmit() {
    alert("You have adopted birds. Thank you!");
  }
  return (
    <>
      <div className="Checkout">
        <h4>Checkout</h4>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" />
          <input onClick={handelSubmit} type="submit"></input>
        </form>
      </div>
    </>
  );
}

export default Checkout;
