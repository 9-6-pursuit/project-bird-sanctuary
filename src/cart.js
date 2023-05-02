


export default function Cart({birdCart,total}) {
   
   
   
   return ( <section>
        <h3>Cart</h3>
        <ul>
            <li><span>Discount: </span></li>
            <li><span>Total: </span></li>
            {birdCart.map( bird => 
                <ol>
                    {bird.name} - ${bird.amount}
                </ol>
            )}
        </ul>
    </section>)
}