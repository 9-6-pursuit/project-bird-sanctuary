import React from "react";

function BirdCard({bird , adoptBird } ) {
    // console.log(bird)


    return (
        <> 
            <ul class="card">
                <p>{bird.name}</p>
                <p>Price: ${bird.amount}</p>
                <img src={bird.img} alt={bird.name} />
                <button onClick={() => adoptBird(bird)}>Adopt</button>
            </ul>
        </>
    );
}


export default BirdCard