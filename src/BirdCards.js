import birdData from './data/birdData.js' // note that birdData is not a component; it is a file that holds our data for birds, hence why the first letter is not capitalized.
import { useState } from 'react';


const BirdCards = () => {
    const [birds, setBirds] = useState([]); // default value of the birds array is set to empty.
    const [total, setTotal] = useState(0); //default value of total is set to zero.

    const adoptBird = (bird) => {
        setBirds([...birds, bird]);
        setTotal(total + bird.amount);
    };


    return (
        <div className="card">
            {birdData.map(bird => (
            <><img src={bird.img} alt={bird.name}/><h3>{bird.name}</h3><p>Amount:${bird.amount}</p><button onClick={() => adoptBird(bird)}>Adopt</button></>
            ))}
        </div>
    );
};

export default BirdCards;