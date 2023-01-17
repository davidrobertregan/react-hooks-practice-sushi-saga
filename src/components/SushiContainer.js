import React from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({ sushi }) {

const filteredSushis = sushi.slice(0, 4)

const sushiComponents = filteredSushis.map(s => <Sushi sushi={s}></Sushi>)
  

return (
    <div className="belt">
      {sushiComponents}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
