/** @format */

import React, { useState } from "react";

function NewBirdForm(props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [zipCode, setZipCode] = useState("");

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleZipCodeChange = (event) => {
		setZipCode(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			firstName !== "" &&
			lastName !== "" &&
			email !== "" &&
			zipCode !== ""
		) {
			alert("You have adopted birds. Thank you!");
			setFirstName("");
			setLastName("");
			setEmail("");
			setZipCode("");
			props.setCardBirds([]);
		}
	};

	return (
		<div className="Checkout">
			<h3>Checkout</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fname">First Name:</label>
				<input
					type="text"
					id="fname"
					value={firstName}
					onChange={handleFirstNameChange}></input>
				<label htmlFor="lname">Last Name:</label>
				<input
					type="text"
					id="lname"
					value={lastName}
					onChange={handleLastNameChange}></input>
				<label htmlFor="email">Email:</label>
				<input
					type="text"
					id="email"
					value={email}
					onChange={handleEmailChange}></input>
				<label htmlFor="zip">Zip Code:</label>
				<input
					type="number"
					id="zip"
					value={zipCode}
					onChange={handleZipCodeChange}></input>
				<input type="submit" value="SUBMIT"></input>
			</form>
		</div>
	);
}

export default NewBirdForm;
