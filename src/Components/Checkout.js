import React, { useState } from "react";

export default function Checkout({ resetCart }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
  });

  const { firstName, lastName, phone, email, zipCode } = form;

  function resetForm() {
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      zipCode: "",
    });
  }

  function handleTextChange(event) {
    setForm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    resetForm();
    resetCart();
  }

  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        First Name
        <label htmlFor="firstName">
          <input
            type="text"
            name="name"
            value={form.firstName}
            onChange={handleTextChange}
          />
        </label>
        Last Name
        <label htmlFor="lastName">
          <input
            type="text"
            name="name"
            value={form.lastName}
            onChange={handleTextChange}
          />
        </label>
        <br />
        Email
        <label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleTextChange}
          />
        </label>
        <br />
        Phone
        <label htmlFor="phone">
          <input
            type="phone"
            name="number"
            value={form.phone}
            onChange={handleTextChange}
          />
        </label>
        Zip Code
        <label htmlFor="zipCode">
          <input
            type="number"
            value={form.zipCode}
            onChange={handleTextChange}
          ></input>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
