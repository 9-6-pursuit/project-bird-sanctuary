export default function Checkout({handleSubmit,handleTextChange}){
    return (
        <>
            <form onSubmit={handleSubmit}>
              <h3>Checkout</h3>
              <label htmlFor="name">First name:</label>
              <input
                type="text"
                id="name"
                onChange={handleTextChange}
                // value={newEvent.name}
              />

              <label htmlFor="organizer">Last name:</label>
              <input
                type="text"
                id="organizer"
                onChange={handleTextChange}
                // value={newEvent.organizer}
              />

              <label htmlFor="eventImage">Email :</label>
              <input
                type="text"
                id="eventImage"
                onChange={handleTextChange}
                // value={newEvent.eventImage}
              />
              <label htmlFor="zip">Zip Code:</label>
              {/*  onChange={handleSelectChange}*/}
              <input type="number" id="zip"/>
              <br />
              <input type="submit" />
            </form>
          </>
    )
}