export default function OneBird({OneBird,updateAdopt,bird}) {
    return (
      <>
        <div key={OneBird.id} className="attendee">

          <p>
            <button
              className="clickable"
              onClick={() =>
                updateAdopt(
                  bird.id
                )
              }
            >
              Attending:
            </button>
            <span>
              {OneBird.attendance ? "✅" : "❌"}
            </span>
          </p>
        </div>
      </>
    )
  }
  