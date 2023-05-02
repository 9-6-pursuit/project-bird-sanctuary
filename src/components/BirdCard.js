

export default function BirdCard({bird, handleCartItems}) {
   
    
    return (
       <section className="card">
        
        <img src={bird.img}></img>
        <h2>
            {bird.name}
        </h2>
        <h2>
            {bird.amount}
        </h2>
        <button onClick={()=>handleCartItems(bird)}>Adopt</button>
       </section> 
    );
};