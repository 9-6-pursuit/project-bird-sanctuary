import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";
import birdsData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";
import BirdsArray from "./components/BirdsArray.js";
import OneBird from "./components/OneBird.js"
import Birds from "./components/Birds.js";

// import eventsD from "./data";
// import Attendees from "./Components/Attendees";
// import Event from "./Components/Event";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import NewEventForm from "./Components/NewEventForm";

function App() {
  const [birds, setBird] = useState(birdsData);
  const [bonusItem, setBonusItem] = useState(bonusItems);
  const [adopt, setAdopt] = useState(false)
  const [user, setUser] = useState('')
  const [adoptCart, setAdoptCart] = useState([])

  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  // function handleSelectChange(e) {
  //   setSelectOption(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   addEvent();
  //   resetEventForm();
  // }

  function handleTextChange(e) {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setUser()
    resetEventForm();
  }

  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    // setSelectOption("");
  }

  function updateAdopt(birdId) {
    const birdsArray = [...birdsData];
    let adoptableBirdsArray = birdsArray.map(bird => ({...bird, isAdopted: false}))
    const birdIndex = birdsArray.findIndex((bird) => birdId === bird.id);
    const bird = { ...birdsArray[birdIndex]};
    adoptableBirdsArray[birdIndex].isAdopted = !adoptableBirdsArray[birdIndex].isAdopted
    birdsArray[birdIndex] = bird
    setAdopt(!adopt)
  }

  function adoptCartFun (bird) {
    let adoptCartBirds = []
    
  }

  return (
    <div className="App">
      <main>
        <div className="new-event">
          <>
            <form onSubmit={handleSubmit}>
              <h3>Currently In Cart</h3>
              <label htmlFor="discount">Discount Total: %</label>
              <br></br>
              <label htmlFor="total">Total: $</label>
              <br></br>
              <label htmlFor="donation-message">Your donations have qualified you for: </label>
              <li></li>
              <br></br>
            </form>
          </>
          <br></br>
          <>
            <form onSubmit={handleSubmit}>
              <h3>Checkout</h3>
              <label htmlFor="name">First name:</label>
              <input
                type="text"
                id="name"
                onChange={handleTextChange}
                value={newEvent.name}
              />

              <label htmlFor="organizer">Last name:</label>
              <input
                type="text"
                id="organizer"
                onChange={handleTextChange}
                value={newEvent.organizer}
              />

              <label htmlFor="eventImage">Email :</label>
              <input
                type="text"
                id="eventImage"
                onChange={handleTextChange}
                value={newEvent.eventImage}
              />
              <label htmlFor="zip">Zip Code:</label>
              {/*  onChange={handleSelectChange}*/}
              <input type="number" id="zip"/>
              <br />
              <input type="submit" />
            </form>
          </>
        </div>
        <div className="events">
          <ul>
            {birds.map((bird) => {
              const OneBird = bird
              return (
                <BirdsArray 
                OneBird={OneBird}
                BirdsArray={BirdsArray}
                bird={bird}
                updateAdopt={updateAdopt}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;







// function App () {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// };

// export default App;


// App.js = App.js
// Event = BirdsArray
// Attendees = Birds (not birds)
// Attendee = Bird (not bird)


