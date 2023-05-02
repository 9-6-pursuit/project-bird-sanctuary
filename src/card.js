export default function Card( {bird,handleCart} ) {


    return (
        <div class="card">
            <span>{bird.name}</span>  
            <li key={bird.id} className="card">
                <img src={bird.img} alt={bird.name} />
                <h5>
                    {bird.name} {bird.amount}
                </h5>

            
            <button onClick={() => handleCart(bird)}>Adopt</button>
            </li>
        </div>
    )
}