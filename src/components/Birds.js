/** @format */
import Card from "./Card.js";
import React from "react";

function Birds(props) {
	return (
		<div className="birds">
			{props.birdData.map((bird) => (
				<Card cartBirds={props.cartBirds} bird={bird} setCardBirds={props.setCardBirds}></Card>
			))}
		</div>
	);
}

export default Birds;
