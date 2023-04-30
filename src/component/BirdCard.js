import React from "react";

function BirdCard({bird}) {


    
    
    return (
        <>
            <ul className="card">
                <p class="name">{bird.name}</p>
                <p>Price: ${bird.amount}</p>
                <img src={bird.img} alt={bird.name} />
                <button >Adopt</button>
            </ul>
        </>
    );
}
  

export default BirdCard