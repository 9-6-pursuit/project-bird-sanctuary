export default function BirdsArray({bird,addCart}) {

  return (
    <div>
      <li key={bird.id}>
        <img src={bird.img}></img>
        <h5>{bird.name}</h5>
        <h6>Price: ${bird.amount}</h6>
        <button onClick={() => addCart(bird)}>Adopt</button>
      </li>
    </div>
  )
}

  // <>
  //   <li key={bird.id}>
  //     <h5>
  //       {bird.name} <br></br> Price: ${bird.amount}
  //     </h5>
  //     <img src={bird.img} alt={bird.name} />
  //     <br>
  //     </br>
  //     <Birds bird={bird} addCart={addCart}/>
  //   </li>
  // </>