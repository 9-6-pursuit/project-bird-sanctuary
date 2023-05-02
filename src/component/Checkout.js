import React from "react";

function Checkout() {

    function handelOnSubmit(){
        alert("You have adopted birds. Thank you!")
    }
  return(
    <>
    <div className="checkout">
    <h4>Checkout</h4>
    <form>
        <label>First Name</label>
        <input
        type="text"
        id="first-name"
        />
        <label>Last Name</label>
        <input
        type="text"
        id="last-name"
        />
        <label>Email</label>
        <input
        type="email"
        id="email"
        />
        <label>Zip Code</label>
        <input
        type="number"
        id="email"
        />

        <button onClick = {handelOnSubmit}>Submit</button>

    </form>
    </div>
    </>
  );
}

export default Checkout