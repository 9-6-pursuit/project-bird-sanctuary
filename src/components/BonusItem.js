export default function bonusItems({qualifiedBonus}) {
  return (
    qualifiedBonus.map((item)=>{
      <li>{item}</li>
    })
  )
}
// import OneBird from "./OneBird"
// import { useState } from "react";

// export default function Birds({BirdsArray,updateAdopt,adopt,adoptCartBirds}) {

//   const [selected, setSelected] = useState(false);

//   function toggleAdopt() {
//     setSelected(!selected)
//   }

//   return (
//     <>
//       <button onClick={toggleAdopt}>
//         {!adopt ? "Adopt" : "Do Not Adopt"}
//       </button>

//       {adopt ? (
//         <div className="adopt">
//           {adoptCartBirds.push((OneBird) => (
//             <OneBird BirdsArray={BirdsArray} adopt={adopt} toggleAdopt={toggleAdopt} updateAdopt={updateAdopt}/>
//           ))}
//         </div>
//       ) : null}
//     </>
//     // <Attendee attendee={attendee} event={event} updateEventAttendance={updateEventAttendance}/>
//   )
// }