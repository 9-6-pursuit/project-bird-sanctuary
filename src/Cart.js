import bonusItems from './data/bonusItems'


const Cart = ({birds, total}) => {

   const discount = () => {
    if (birds.length >= 3) {
        return 0.1;
    }
    return 0;
   };


    let bonus = [];
    switch (true) {
        case total >= 100 && total < 300:
            return bonus=[bonusItems[0]];
        case total >= 300 && total < 500:
            return  bonus=[bonusItems[0], bonusItems[1]];
        case total >= 500 && total < 1000:
            return bonus=[bonusItems[0], bonusItems[1], bonusItems[2]];
        case total >= 1000:
            return bonus=[bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]];
        default:
            return [];
    };

    
   return (
    <div className='Cart'>
        <h2>Cart</h2>
        <ul>
            {birds.map((bird) => (
                <li key={bird.id}>{bird.name}</li>
            ))}
        </ul>
        <h4>{`Total: $${(total * (1 - discount())).toFixed(2)}`}</h4>
        <ul>
            {bonus.map((item) => (
                <li key={item}>{item}</li>
        ))}
        </ul>
    </div>
   );
};


export default Cart;