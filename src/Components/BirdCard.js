import React from 'react';

export default function BirdCard(props) {
  const { bird } = props;

  const handleAddToCart = () => {
    props.addToCart(bird);
  };

  return (
    <div className="card">
      <img src={bird.img} alt={bird.name} />
      <h2>{bird.name}</h2>
      <p>Price: ${bird.amount}</p>
      <button onClick={handleAddToCart}>Adopt</button>
    </div>
  );
}
