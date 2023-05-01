import { Component } from 'react';
import BirdCard from './Components/BirdCard';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut.js';
import './App.css';
import birdData from './data/birds.js';
import bonusItems from './data/bonusItems.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birdCartItems: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeHandler = this.removeItems.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  addToCart = (bird) => {
    const newcart = [...this.state.birdCartItems, bird];
    this.setState({
      birdCartItems: newcart,
    });
  };

  handleCheckOut = (event) => {
    event.preventDefault();
    if (this.state.birdCartItems.length > 0) {
      alert('You have adopted birds. Thank you!');
      this.setState({
        birdCartItems: [],
      });
    } else {
      alert("You haven't adopted any birds yet!");
    }
  };

  removeItems = (id) => {
    let newCartItems = [...this.state.birdCartItems];
    for (let i = 0; i < newCartItems.length; i++) {
      if (newCartItems[i].id === id) {
        newCartItems.splice(i, 1);
        break;
      }
    }
    this.setState({
      birdCartItems: newCartItems,
    });
  };

  render() {
    const { birdCartItems } = this.state;

    const discount = birdCartItems.length > 1 ? 10 : 0;

    const birdTotal =
      birdCartItems.reduce((acc, curr) => acc + curr.amount, 0) *
      (discount / 100);

    return (
      <section className='app-layout'>
        <div className='cart-checkout'>
          <Cart
            bonusItems={bonusItems}
            discount={discount}
            birdTotal={birdTotal}
            birdCartItems={birdCartItems}
            removeItems={this.removeItems}
          />
          <CheckOut
            birdCartItems={birdCartItems}
            handleCheckOut={this.handleCheckOut}
          />
        </div>
        <div className='birds'>
          <BirdCard birdData={birdData} addToCart={this.addToCart} />
        </div>
      </section>
    );
  }
}

export default App;