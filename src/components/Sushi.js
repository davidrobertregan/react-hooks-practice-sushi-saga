import React, { useState } from "react";

function Sushi({sushi, handleSushiClick}) {

  const [eaten, setEaten] = useState(false)

  return (
    <div className="sushi" onClick={() => { handleSushiClick(); setEaten(true) }}>
      <div className="plate">
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
