import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [currentSushi, setCurrentSushi] = useState([])
  const [sliceIndexObj, setSliceIndexObj] = useState({slice1: 0, slice2: 4})
  const [money, setMoney] = useState(60)

  const {slice1, slice2} = sliceIndexObj
  
  function setStates(sushiArr) {
    setSushi(sushiArr);


    setCurrentSushi([...sushiArr].slice(slice1, slice2))
  }
  
  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushiArr => setStates(sushiArr))
  }, [])

  function addSushi() {
    setSliceIndexObj(
      {...sliceIndexObj, 
        slice1: sliceIndexObj.slice1 + 4, 
        slice2: sliceIndexObj.slice2 + 4
      })
  }

  function addFourCurrentSushi(){
    console.log(sliceIndexObj)
    setCurrentSushi([...currentSushi, ...sushi.slice(slice1, slice2)])
  }

  function subtractMoney(plate) {
    
    if(money - plate.price > 0){
      setMoney(money - plate.price)
      return true
    }
    else {
      alert('budget reached!')
      return false
    }
  }

  useEffect(addFourCurrentSushi, [sliceIndexObj])



  return (
    <div className="app">
      <SushiContainer currentSushi={currentSushi} addSushi={addSushi} subtractMoney={subtractMoney}/>
      <Table money={money}/>
    </div>
  );
}

export default App;
