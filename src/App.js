import BirdCard from './components/BirdCard';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


export default function App () {
  return (
    <div>
      <h1>Bird Sanctuary Donation App</h1>
      {birdData.map(bird => <BirdCard key={bird.id} bird={bird} />)}
      <Cart />
      <Checkout />
    </div>
  );
};
