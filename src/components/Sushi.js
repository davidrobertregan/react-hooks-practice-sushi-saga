import React, {useState} from "react";

function Sushi({ plate, subtractMoney }) {
  
  const {name, img_url, price} = plate

  let image = `http://localhost:3001/${img_url}`

  const [eaten, setEaten] = useState(false)

  function handleClick() {
    if (subtractMoney(plate) === true) {
      setEaten(!eaten) 
    }
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
