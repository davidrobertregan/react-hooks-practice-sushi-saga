import React, { useState }from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({ sushi }) {

const [currentSushi, setCurrentSushi] = useState(sushi.slice(0, 4))

const sushiComponents = currentSushi.map(s => <Sushi sushi={s}></Sushi>)

const addSushi = () => {
  const index = sushi.indexOf(currentSushi[3])
  setCurrentSushi(() => sushi.slice(index + 1, index + 5))
}

return (
    <div className="belt">
      {sushiComponents}
      <MoreButton addSushi={addSushi}/>
    </div>
  );
}

export default SushiContainer;
