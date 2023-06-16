import { useState } from 'react';
import "../css/Checkout.css";

export default function Checkout() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        zip: "",
    })

    const handleTextChange = (event) => {
        setUser({...user,
          [event.target.id]: event.target.value,
        });
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        console.log(user);
        resetForm();
    }

    const resetForm = () => {
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            zip: "",
          })  
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    type="text"
                    value={user.firstName}
                    onChange={handleTextChange}
                    id="firstName"
                />
                <label htmlFor="lastName">Last Name: </label>
                <input 
                    type="text"
                    value={user.lastName}
                    onChange={handleTextChange}
                    id="lastName"
                />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    value={user.email}
                    onChange={handleTextChange}
                    id="email"
                />
                <label htmlFor="zip">Enter Zip: </label>
                <input 
                    type="number"
                    value={user.zip}
                    onChange={handleTextChange}
                    id="zip"
                />
                <input type="submit" />
            </form>
        </div>
    )
}