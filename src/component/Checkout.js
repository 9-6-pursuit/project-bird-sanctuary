import React from "react";

function Checkout() {

    function handelOnSubmit(){
        alert("You have adopted birds. Thank you!")
    }
  return(
    <>
    <div className="checkout">
    <h4>Checkout</h4>
    <form onSubmit={handelOnSubmit}>
        <label>First Name</label>
        <input
        type="text"
        id="first-name"
        required
        />
        <label>Last Name</label>
        <input
        type="text"
        id="last-name"
        required
        />
        <label>Email</label>
        <input
        type="email"
        id="email"
        required
        />
        <label>Zip Code</label>
        <input
        type="number"
        id="zip"
        required
        />
        <input type="submit"></input>
    </form>
    </div>
    </>
  );
}

export default Checkout