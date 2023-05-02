export default function BirdForm( {handleSubmit} ) {
    return (
        <form onSubmit={handleSubmit}>
            <h3>Checkout</h3>
            
            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            required/>

            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            required/>

            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            required/>

            <label htmlFor="firstName">Zip-Code</label>
            <input 
            type="number" 
            id="zipcode" 
            name="zipcode" 
            required/>
            <br />
            <input type="submit"/>

        </form>
    )
}