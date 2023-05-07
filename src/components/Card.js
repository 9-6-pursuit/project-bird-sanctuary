/** @format */

import React from "react";

function Card(props) {
	function adopt() {
		props.setCardBirds([props.bird, ...props.cartBirds]);
	}
	return (
		<div className="card" key={props.bird.id}>
			<h5>{props.bird.name}</h5>
			<img
				src={props.bird.img}
				alt="bird img"
				width="120px"
				height="120px"
			/>
			<h4>Price: ${props.bird.amount}</h4>
			<button onClick={adopt}>ADOTP</button>
		</div>
	);
}

export default Card;
