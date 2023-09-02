import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";

const winnigCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [cells, setCells] = useState(["","","","","","","","",""]);
  const [go,setGO] = useState("circle");
  const [score, SetScore] = useState("");


  useEffect(()=>{
    winnigCombos.forEach((combo)=>{
      const circleWins=combo.every((comboCell)=>cells[comboCell]==="circle");
      const squareWins=combo.every((comboCell)=>cells[comboCell]==="square");

      if(circleWins){
        SetScore("circle wins");
      }else if(squareWins){
        SetScore("square wins");
      }
    })

  },[cells, score]);

  useEffect(()=>{
    if(cells.every((cell)=>cell!=="") && !score){
      SetScore("Draw")
    }
  },[cells, score])

  console.log(cells)

  return (
    <main>
      <div className="gameboard">
      {cells.map((cell,index)=>(
        <Cell 
        id={index} 
        go={go} 
        setGo={setGO} 
        key={index} 
        cells={cells} 
        setCells={setCells}
        cell={cell}
        score={score}/>
      ))}
      </div>
      <div>
        <p>{score}</p>
        {!score && <p>go {go}</p>}
      </div>
    </main>
  );
}

export default App;
