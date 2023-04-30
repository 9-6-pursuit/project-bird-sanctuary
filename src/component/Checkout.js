import React from "react";

function Checkout() {
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
        type="text"
        id="email"
        />
        <label>Zip Code</label>
        <input
        type="text"
        id="email"
        />

        <button>Submit</button>

    </form>
    </div>
    </>
  );
}

export default Checkout
