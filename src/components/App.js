import {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(20)

  const getSushi = () => {
    fetch(API)
      .then(data => data.json())
      .then(sushi => setSushi(sushi))
  }

  useEffect(getSushi, [])

  const handleSushiClick = () => {
    if(money < 5) {alert("you are out of money!"); return}
    setMoney(money - 5)
    setPlates([...plates, 1])
  }
  return (
    <div className="app">
      <SushiContainer sushi={sushi} handleSushiClick={handleSushiClick}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
