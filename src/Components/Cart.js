export default function Cart({adoptions, amount, discount, removeBird, bonusItems}) {
    function switchAmount(amount) {
      if (amount <= 300){
        return <ul> <li>{bonusItems[0]}</li></ul>
      } else if (amount <= 500) {
        return <ul>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          </ul>
      }
      else if (amount <= 1000) {
        return <ul>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
          </ul>
      } else if (amount > 1000){
        return <ul>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
          <li>{bonusItems[3]}</li>
        </ul>
      }
    }

    return (
        <div>
            <h1>Hello, cart!</h1>
            <h1>Cart</h1>
            <p>Discount: {discount}%</p>
            <p>Total: ${adoptions.length >= 3 ? amount * .9 : amount}</p>
            <ol>
                {adoptions.length >= 1 ? adoptions.map((adopt, index) => (
                    <li key={index}>{adopt.name}: ${adopt.amount} <br/>
                    <button onClick={() =>removeBird(adopt.adoptId)}>
                    Remove
                    </button>
                    </li>
                )): null}
            </ol>

            <ul>
                {adoptions.length >= 1 ? switchAmount(amount):null}
            </ul>
        </div>
    );
}