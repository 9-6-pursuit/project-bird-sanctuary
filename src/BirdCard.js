import React from 'react';

function BirdCard({ bird, onAdopt }) {
  return (
    <div className="card">
      <img src={bird.img} alt={bird.name} />
      <h3>{bird.name}</h3>
      <p>${bird.amount}</p>
      <button onClick={() => onAdopt(bird)}>Adopt</button>
    </div>
  );
}

export default BirdCard;

