import bonusItems from "../data/bonusItems"
import BonusItem from "./BonusItem";
export default function Cart({ adoptCart, setAdoptCart}){

    let total = 0;
    if (adoptCart.length){
        adoptCart.map((bird)=>{
            return total += bird.amount
        })
    }
    let discount = 0;
    if (adoptCart.length >= 3){
        discount = .1
        if (discount){
            total = (total -(total * discount))
        }
    }
    
    let qualifiedBonus = []
    if (total>=1000){
        qualifiedBonus.push(bonusItems[0,1,2,3])
    } else if(total>=500){
        qualifiedBonus.push(bonusItems[0,1,2])
    } else if(total>=300){
        qualifiedBonus.push(bonusItems[0,1])
    } else if(total>=100){
        qualifiedBonus.push(bonusItems[0])
    } else {
        qualifiedBonus = []
    }


    function remove(bird){
        console.log(bird)
    }



    return (
        <>
            <form >
              <h3>Cart</h3>
              {/* <h8>Currently In Cart: </h8> */}
              <label htmlFor="discount">Discount Total: %{discount * 100}</label>
              <br></br>
              <label htmlFor="total">Total: ${total}</label>
              <br></br>
              <label htmlFor="donation-message">Your donations have qualified you for:</label>
              {qualifiedBonus.map((item)=>{
                return (
                    <li>{item}</li>
                )
              })}
              <br></br>
            </form>
        </>
    )
}