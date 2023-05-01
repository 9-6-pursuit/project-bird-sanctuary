import { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  birdsInCart = (birdCartItems, removeItems) => {
    return birdCartItems.map((cartItem, index) => {
      return (
        <li key={index}>
          {cartItem.name} ${cartItem.amount}
          <button
            onClick={() => {
              removeItems(cartItem.id);
            }}
          >
            x
          </button>
        </li>
      );
    });
  };

  displaybonusItems = (bonusItems, birdTotal) => {
    let bonusArray = [];

    if (birdTotal >= 100) {
      bonusArray.push(<li key={bonusItems[0]}>{bonusItems[0]}</li>);
    }
    if (birdTotal >= 300) {
      bonusArray.push(<li key={bonusItems[1]}>{bonusItems[1]}</li>);
    }
    if (birdTotal >= 500) {
      bonusArray.push(<li key={bonusItems[2]}>{bonusItems[2]}</li>);
    }
    if (birdTotal >= 1000) {
      bonusArray.push(<li key={bonusItems[3]}>{bonusItems[3]}</li>);
    }

    return bonusArray;
  };

  render() {
    const { bonusItems, discount, birdTotal, birdCartItems, removeItems } =
      this.props;

    return (
      <section className='cart-wrapper'>
        <div className='Cart'>
          <h3>Cart</h3>
          <h5>Discount: {discount}%</h5>
          <h4>Total: ${birdTotal}</h4>
          <ol>{this.birdsInCart(birdCartItems, removeItems)}</ol>
          <p>Your donations qualify you for the following items:</p>
          <h5>Bonus Items:</h5>
          <ul>{this.displaybonusItems(bonusItems, birdTotal)}</ul>
        </div>
      </section>
    );
  }
}

export default Cart;