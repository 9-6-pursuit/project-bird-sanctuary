
export default function Bird({bird, addToCart}){
    
    return(
        <div className="card">
            <li className="birds">
                <img src={bird.img} alt={bird.img} className="icon"></img>
                <h4>{bird.name}</h4>
                <div>${bird.amount}</div>
                <button onClick={() => addToCart(bird)}>
                    Adopt
                </button>
            </li>       
        </div>
    );

}