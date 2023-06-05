import React from 'react'
import { useState } from 'react'

function Checkout({}) {
    

    function handleSubmit(cart){
      cart = [];
      window.alert('You have adopted birds. Thank you!');
    }
  return (
    <div className='Checkout'>
        <h3>Checkout</h3>
        <form>
            <label>First Name <br/>
            <input type='text'/>
            </label>

            <label>Last Name<br/>
            <input type='text' />
            </label>

            <label>Email<br/>
            <input type='email' />
            </label>

            <label>Zip Code<br/>
            <input type='postal' />
            </label>

            <input type='submit' value='Submit' onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default Checkout