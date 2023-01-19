import React, { useEffect, useState }from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({ sushi, handleSushiClick }) {

const [currentSushi, setCurrentSushi] = useState([])

useEffect(() => setCurrentSushi(sushi), [sushi]) /* had to put this here rather so that component would rerender for sushi? */

const sushiComponents = currentSushi.slice(0, 4).map(s => <Sushi sushi={s} key={s.id} handleSushiClick={handleSushiClick}></Sushi>)

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
