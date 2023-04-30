


export default function Checkout ({cartItems,setCartItems}){
    function handleSubmit(event){
        event.preventDefault();
        window.alert("You have adopted birds. Thank you!")
        setCartItems([]);
    }
    return(
        <div className="Checkout">
            <h3>Checkout</h3>
            <form >
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName"></input>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName"></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"></input>
                <label htmlFor="zipCode">Zip Code</label>
                <input type="number" id="zipCode"></input>
                
                <input onClick={handleSubmit} type="submit" ></input>
            </form>
        </div>
    );
}