import React, { Component } from 'react';
import './CheckOut.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  creditCard: '',
  zipCode: '',
};

class CheckOut extends Component {
  constructor() {
    super();
    this.state = initialState;

    // >> Binding
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { handleCheckOut } = this.props;

    return (
      <section className='checkout-section'>
        <div className='checkout-wrapper'>
          <h4>Checkout</h4>
          <form className='Checkout' onSubmit={handleCheckOut}>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              name='firstName'
              type='text'
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />

            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              name='lastName'
              type='text'
              className={this.state.lastName}
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />

            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='text'
              className={this.state.email}
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <label htmlFor='zipCode'>Zip Code</label>
            <input
              id='zipCode'
              name='zipCode'
              type='text'
              className={this.state.zipcode}
              value={this.state.zipCode}
              onChange={this.handleChange}
              required
            />
            <div>
              <input type='submit' value='Submit' className='Checkout' />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default CheckOut;