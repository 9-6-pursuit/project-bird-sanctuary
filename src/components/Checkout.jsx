import { useState } from "react";

const Checkout = ({ setCart }) => {
  const [adopt, setAdopt] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  });

  const handleOnChange = (event) => {
    const getId = event.target.id;
    const getValues = event.target.value;

    setAdopt((newData) => {
      const updateData = {
        firstName: newData.firstName,
        lastName: newData.lastName,
        email: newData.email,
        zip: newData.zip,
      };
      updateData[getId] = getValues;
      return updateData;
    });
  };

  const submit = (event) => {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    setCart([]);
    setAdopt({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  };

  return (
    <div className="Checkout">
      <h4>Checkout</h4>
      <form onSubmit={submit}>
        <label>
          First Name
          <input
            type="text"
            value={adopt.firstName}
            id="firstName"
            onChange={handleOnChange}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            id="lastName"
            value={adopt.lastName}
            onChange={handleOnChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            id="email"
            value={adopt.email}
            onChange={handleOnChange}
            required
          />
        </label>
        <label>
          Zip Code
          <input
            type="number"
            id="zip"
            value={adopt.zip}
            onChange={handleOnChange}
            required
          />
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
