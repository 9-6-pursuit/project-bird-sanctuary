/** @format */
import { React, useState } from "react";
import Cart from "./components/Cart.js";
import Birds from "./components/Birds.js";
import NewBirdForm from "./components/NewBirdForm.js";
import birdData from "./data/birds.js";

function App() {
	let [cartBirds, setCardBirds] = useState([]);
	return (
		<div className="App">
			<div className="sidebar-container">
				<Cart cartBirds={cartBirds} setCardBirds={setCardBirds}></Cart>
				<NewBirdForm setCardBirds={setCardBirds}></NewBirdForm>
			</div>
			<Birds
				birdData={birdData}
				setCardBirds={setCardBirds}
				cartBirds={cartBirds}></Birds>
		</div>
	);
}

export default App;
