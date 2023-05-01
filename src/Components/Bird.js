import React from 'react';
// import './Bird.css';

const Bird = ({ bird, addToCart }) => {
  const { name, amount, img } = bird;
  console.log(img);
  return (
    <div className='card'>
      <h4 className='name'>{name}</h4>
      <p className='price'>Price: ${amount}</p>
      <img
        src={img}
        alt={name}
      />
      <br />
      <button onClick={() => addToCart(bird)}>ADOPT</button>
    </div>
  );
};

export default Bird;