import birdData from "../data/birdData";
import "../css/birdCard.css";

export default function BirdCard ({ addToCart }) {
    return (
        <div className="bird-container">
            {birdData.map((bird) => (
                <div key={bird.id}>
                    <div className="birdcard">
                        <h4>{bird.name}</h4>
                        <p>Price: ${bird.amount}</p>
                        <img src={bird.img} alt={bird.name} />
                        <button onClick={()=>{addToCart(bird)}}>Adopt</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

//bird is defined in the map fxn and being returned as JSX. therefore I can use bird as prop for other fxns. 