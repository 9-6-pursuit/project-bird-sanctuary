const Bird = ({ bird, addToCart }) => {
	const { img, name, amount } = bird;
	return (
		<div className="card birds">
			<h4>{name}</h4>
			<p>${amount}</p>
			<img src={img} alt="" />

			<button onClick={() => addToCart(bird)}>Adopt</button>
		</div>
	);
};

export default Bird;