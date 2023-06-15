
import { useState } from "react";
import birdData from "./data/birds.js";
import bonusItems from "./data/bonusItems.js";
import BirdsArray from "./components/BirdsArray.js";
import ShoppingCart from "./components/ShoppingCart.js"
import Checkout from "./components/Checkout.js"

// import eventsD from "./data";
// import Attendees from "./Components/Attendees";
// import Event from "./Components/Event";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import NewEventForm from "./Components/NewEventForm";

function App() {
  const [birds] = useState(birdData);
  const [adoptCart, setAdoptCart] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)

  const [adopt, setAdopt] = useState(false)
  const [selected, setSelected] = useState(false);


  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });


  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
  }

  function addCart (bird) {
    setAdoptCart([...adoptCart, bird])
    console.log(adoptCart)
  }

  return (
    <div className="App">
      <main>
        <div className="new-event">
          <ShoppingCart adoptCart={adoptCart} setAdoptCart={setAdoptCart}/>
          <br></br>
          <Checkout adoptCart={adoptCart} setAdoptCart={setAdoptCart} />
        </div>
        <div className="events">
          <ul>
            {birds.map((bird) => {
              return (
                <BirdsArray
                bird={bird}
                addCart={addCart}
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