import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({currentSushi, addSushi, subtractMoney}) {

  const sushiPlates = currentSushi.map(plate => <Sushi key={plate.id} plate={plate} subtractMoney={subtractMoney} />)

  return (
    <div className="belt">
      {sushiPlates}
      <MoreButton addSushi={addSushi}/>
    </div>
  );
}

export default SushiContainer;
