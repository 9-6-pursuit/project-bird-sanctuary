import { useEffect, useState } from "react";
import bonusItems from "../data/bonusItems";

const Bonus = ({ total }) => {
  const [bonus, setBonus] = useState([]);

  useEffect(() => {
    let numBonusItems = 0;
    if (total >= 100 && total < 300) {
      numBonusItems = 1;
    } else if (total >= 300 && total < 500) {
      numBonusItems = 2;
    } else if (total >= 500 && total < 1000) {
      numBonusItems = 3;
    } else if (total >= 1000) {
      numBonusItems = 4;
    }
    setBonus(bonusItems.slice(0, numBonusItems));
  }, [total]);

  return (
    <>
      {bonus.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </>
  );
};

export default Bonus;
