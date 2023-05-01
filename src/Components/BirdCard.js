import React, { useState, useEffect } from 'react';

export default function BirdCard(props) {
  const { bird } = props;

  const [isAddedToCart, setIsAddedToCart] = useState(false);

useEffect(() => {
  if (props.cartItems && props.cartItems.some) {
    const isInCart = props.cartItems.some((item) => item.id === bird.id);
    setIsAddedToCart(isInCart);
  }
}, [props.cartItems, bird.id]);


  const handleAddToCart = () => {
    props.addToCart(bird);
    setIsAddedToCart(true);
  };

  return (
    <div className="card">
      <img src={bird.img} alt={bird.name} />
      <h2>{bird.name}</h2>
      <p>Price: ${bird.amount}</p>
      <button onClick={handleAddToCart}>
        {isAddedToCart ? 'Added to Cart' : 'Adopt'}
      </button>
    </div>
  );
}
