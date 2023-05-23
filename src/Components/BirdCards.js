import "./BirdCards.css";



function BirdCards(props) {

  const { name, amount, img, id, handleAdopt } = props;
  const priceInDollars = amount



  return (
    <>
      <section className='bird-wrapper'>
          <p></p>
        <section className="card bird-card bird">
          <aside>
            <h4>{ name }</h4>
          </aside>
          <article>
            <div className='image-box'>
              <img src={ img } alt={ `${name} profile pic` } />
            </div>
            <p>
              <span>ID #</span>{id}
            </p>
            <p>
              <span>price: </span>{`$${priceInDollars}`}
            </p>
          </article>
          <aside>
            <button className='birds button adopt' id='adopt' onClick={()=> handleAdopt(props) } >
              ADOPT
            </button>   
          </aside>    
        </section>
      </section>
    </>
  )
}

export default BirdCards



  // When this function is triggered, a new constant is created (addBird). addBird is an object in which most fields are populated by information in birdData from birds.js which has been imported. But instead of adding a new bird to the list, I am creating a copy of a bird to put in the cart. Is there a way to use the spread operator instead, where addBird = ...??

  // I was never able to really figure this out. I ended up putting the handleAdoptBird in App and passsing it down as props. Because the return is fine.


//Here is one of the confusing parts. Why do I need to spell out everything here if I am also spelling it out in BirdBoard? And how does deconstruction really work. I have to keep in mind that the deconstruction is something that is in service to and will be read by BirdBoard.js. 


//The answer is I do not. I am not longer using this component at all. I moved everything to BirdBoard. But I still don't know how to put the information iinto the cart and amount as well.


//I ended up not using:   const [ birds, setBirds ] = useState([]); or       {/* <p id="key" className="key">key: {key}</p> */}