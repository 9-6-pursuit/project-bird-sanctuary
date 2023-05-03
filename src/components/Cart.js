/** @format */

import React from "react";
import bonusItems from "../data/bonusItems.js";

function Cart(props) {
	let total = props.cartBirds.reduce((acc, bird) => acc + bird.amount, 0);
	function deleteBird(id) {
		const newCart = [...props.cartBirds];
		const index = newCart.findIndex((bird) => bird.id === id);
		newCart.splice(index, 1);
		props.setCardBirds(newCart);
	}

	return (
		<div className="Cart">
			<h3>Cart</h3>
			<h5>Discount: {props.cartBirds.length >= 3 ? 10 : 0}%</h5>
			<h4>Total: ${total}</h4>
			<ol>
				{props.cartBirds.map((bird) => (
					<li>
						<button onClick={() => deleteBird(bird.id)}>
							<p>
								{bird.name}: ${bird.amount}
							</p>
						</button>
					</li>
				))}
			</ol>
			<h4>
				your donations have qualified you for the following bonuses:
			</h4>
			<ul>
				{total >= 100 ? <li>{bonusItems[0]}</li> : <></>}
				{total >= 300 ? <li>{bonusItems[1]}</li> : <></>}
				{total >= 500 ? <li>{bonusItems[2]}</li> : <></>}
				{total >= 1000 ? <li>{bonusItems[3]}</li> : <></>}
			</ul>
		</div>
	);
}

export default Cart;
