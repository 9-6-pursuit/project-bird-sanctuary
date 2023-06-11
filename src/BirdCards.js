import React from 'react';

function BirdCards({ bird, buyBird }) {
  const handleAdopt = () => {
    buyBird(bird);
  };

  return (
    <div className="card">
      <img src = {bird.img} alt = {bird.name} height="200" width="300"/>
      <h3>{bird.name}</h3>
      <p>Amount: ${bird.amount}</p>
      <button onClick={handleAdopt}>Adopt</button>
    </div>
  );
}

export default BirdCards;
