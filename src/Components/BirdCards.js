

function BirdCards(props) {
  const { name, amount, img, id, key } = props;
  const priceInDollars = amount

  return (
    <div className="card">
      <h2>name: { name }</h2>
      <p>price: {`$${priceInDollars}`}</p>
      <img src={ img } alt={ name } />
      <p>ID #{id}</p>
      <button>adopt</button>
      <p id="key" className="key">key: {key}</p>
    </div>
  )
}

export default BirdCards

//Here is one of the confusing parts. Why do I need to spell out everything here if I am also spelling it out in BirdBoard?