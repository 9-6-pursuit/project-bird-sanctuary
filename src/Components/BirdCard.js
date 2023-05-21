export default function BirdCard({ bird, addBird }) {
  return (
    <div className="card">
      <ul>
        <li>{bird.name}</li>
        <li>Amount: ${bird.amount}</li>
        <li>
          <img src={bird.img} />
        </li>
        <br />
      </ul>
      <button onClick={() => addBird(bird)}>Adopt</button>
    </div>
  );
}
