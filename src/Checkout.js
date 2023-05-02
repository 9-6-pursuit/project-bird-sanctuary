// when destructuring props 
export default function Checkout ({clickSubmit}) {
    return (
      <div >
    <form className="Checkout">
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" type="text"/>
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" type="text"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email"/>
        <label htmlFor="zipcode">Zip Code</label>
        <input id="zipcode" type="text"/>
        <input onClick = {clickSubmit} type="submit"/>
    </form>
      </div>
    );
  }
  