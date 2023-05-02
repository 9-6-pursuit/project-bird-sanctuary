function BirdCard({ birds, handleAdoption }) {
  return (
    <ul className="card">
      {birds.map((bird) => (
        <li key={bird.id} className="birds">
          <h2>{bird.name}</h2>
          <p>Price: ${bird.amount}</p>
          <img src={bird.img} alt={bird.name} />
          <button onClick={() => handleAdoption(bird.id)}>
            Adopt
          </button>
          
        </li>
      ))}
    </ul>
  );
}

export default BirdCard;
