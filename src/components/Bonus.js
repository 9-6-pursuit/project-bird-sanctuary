import bonusItems from "../data/bonusItems";

export default function Bonus({total}){
    const bonuses = [];

    if (total >=100){
        bonuses.push(bonusItems[0]);
    }
    if (total >= 300){
        bonuses.push(bonusItems[1])
    }
    if (total >= 500){
        bonuses.push(bonusItems[2])
    }
    if (total >= 1000){
        bonuses.push(bonusItems[3])
    }

    return(
    bonuses.map((bonus) => {
        return (<li>{bonus}</li>)
    })
    );

}