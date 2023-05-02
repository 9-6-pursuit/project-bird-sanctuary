import Birds from "./Birds.js"
export default function BirdsArray({OneBird,updateAdopt}) {
  return (
  <>
    <li key={OneBird.id}>
      <h5>
        {OneBird.name} <br></br> Price: ${OneBird.amount}
      </h5>
      <img src={OneBird.img} alt={OneBird.name} />
      <br>
      </br>
      <Birds OneBird={OneBird} updateAdopt={updateAdopt}/>
    </li>
  </>
  )
}
