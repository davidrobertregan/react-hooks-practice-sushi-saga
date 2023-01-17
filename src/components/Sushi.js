import React from "react";

function Sushi(sushi) {
  return (
    <div className="sushi">
      <div className="plate">
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushi.sushi.img_url}
            alt={sushi.sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.sushi.name} - ${sushi.sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
