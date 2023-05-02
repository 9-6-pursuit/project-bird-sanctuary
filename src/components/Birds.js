import OneBird from "./OneBird"
import { useState } from "react";
export default function Birds({BirdsArray,updateAdopt,OneBird, adopt,adoptCartBirds}) {
  const [selected, setSelected] = useState(false);
  function toggleAdopt() {
    setSelected(!selected)
  }
  return (
    <>
      <button onClick={toggleAdopt}>
        {!adopt ? "Adopt" : "Do Not Adopt"}
      </button>

      {adopt ? (
        <div className="adopt">
          {adoptCartBirds.push((OneBird) => (
            <OneBird BirdsArray={BirdsArray} adopt={adopt} toggleAdopt={toggleAdopt} updateAdopt={updateAdopt} OneBird={OneBird} />
          ))}
        </div>
      ) : null}
    </>
    // <Attendee attendee={attendee} event={event} updateEventAttendance={updateEventAttendance}/>
  )
}
