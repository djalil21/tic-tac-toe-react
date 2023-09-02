export default function Cell({ go, setGo, id, cells, setCells, cell, score }) {


  const handleClick = (e) => {
    if(score){
      return;
    }
    const available = !cells[id];

    const handleCellchange = (cellToChange) => {
      let copyCells = [...cells];
      copyCells[id] = cellToChange;
      setCells(copyCells);
    };

    if (available) {
      if (go === "circle") {
        handleCellchange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellchange("cross");
        setGo("circle");
      }
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
  );
}
