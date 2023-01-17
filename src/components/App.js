import {react, useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  
  const getSushi = () => {
    fetch(API)
      .then(data => data.json())
      .then(sushi => setSushi(sushi))
  }

  useEffect(getSushi, [])

  return (
    <div className="app">
      <SushiContainer sushi={sushi} />
      <Table />
    </div>
  );
}

export default App;
