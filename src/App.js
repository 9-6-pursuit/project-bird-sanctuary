import React from 'react';
import BirdCards from './BirdCards';
import Cart from './Cart';
import Checkout from './Checkout';

function App () {
  return (
    <div>
      <h1>Bird Adoption Sanctuary</h1>
      <BirdCards/>
      <Cart/>
      <Checkout/>
    </div>
  );
};

export default App;
