function BirdCard({ birds, handleAdoption }) {
  return (
    <ul className="birds-list">
      {birds.map((bird) => (
        <li key={bird.id} className="bird-card">
          <h2>{bird.name}</h2>
          <p>Price: ${bird.amount}</p>
          <img src={bird.img} alt={bird.name} />
          <button onClick={() => handleAdoption(bird.id)}>
            {" "}
            {bird.adopted ? "Adopted" : "Adopt"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BirdCard;
