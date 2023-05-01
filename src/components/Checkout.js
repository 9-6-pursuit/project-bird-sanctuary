import { useState } from "react";



export default function Checkout ({setCartItems}){
    const [form, setForm] =useState({
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
    })
    function handleSubmit(event){
        event.preventDefault();
        resetForm();
        window.alert("You have adopted birds. Thank you!")
        setCartItems([]);
    }

    function handleTextChange(e){
        setForm({
            ...form,
            [e.target.id]:e.target.value,
                })
    }

    function resetForm(){
        setForm({
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
        })
    }

    return(
        <div className="Checkout">
            <h3>Checkout</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={handleTextChange} value={form.firstName}></input>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={handleTextChange} value={form.lastName}></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={handleTextChange} value={form.email}></input>
                <label htmlFor="zipCode">Zip Code</label>
                <input type="number" id="zipCode" onChange={handleTextChange} value={form.zipCode}></input>
                
                <input onClick={handleSubmit} type="submit" ></input>
            </form>
        </div>
    );
}