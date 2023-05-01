import './BirdCard.css';
import Bird from './Bird';

const BirdCard = (props) => {
  const { birdData, addToCart } = { ...props };
  console.log(birdData)
  return (
    <section className='bird-section'>
        <div className='grid'>
          {birdData.map((bird) => {
            return (
              <Bird key={bird.id} bird={bird} addToCart={addToCart} />
            );
          })}
        </div>

    </section>
  );
};

export default BirdCard;