import React from "react";

function BirdCard({bird}) {
    return (
      <>
        <h1>{bird.name}</h1>
        <img src={bird.img} alt={bird.name} />
        <p>Price: ${bird.amount}</p>
      </>
    );
  }
  

export default BirdCard