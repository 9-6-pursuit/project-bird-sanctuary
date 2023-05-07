import React from "react";
export default function Birdcard(props){
return(
    <div className="birds">
    <div key={props.id}>
      <h1>{props.name}</h1>
      <img src={props.image} alt=""></img>
      <h4>${props.amount}</h4>
      <button onClick={() => props.adoptMe(props.bird)}>Adopt</button>
    </div>
  </div>
  )
}


