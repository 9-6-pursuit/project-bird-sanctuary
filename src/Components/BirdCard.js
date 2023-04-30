import React from 'react';

const BirdCard = (props) => {
  const { bird, handleAddToCart } = props;
  return (
    <div className="card">
      <img src={bird.img} alt={bird.name} />
      <h2>{bird.name}</h2>
      <p>${bird.amount}</p>
      <button onClick={() => handleAddToCart(bird)}>Adopt</button>
    </div>
  );
};

export default BirdCard;
