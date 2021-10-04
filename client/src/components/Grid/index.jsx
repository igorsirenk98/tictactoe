import React, { useState } from "react";
import "./styles.css";
import Cell from "../Cell";

const Grid = () => {
  const [gridData, setGridData] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  });
  const cellIds = Object.keys(gridData);

  const onCellClick = (e, id) => {
    e.preventDefault();
    
    const newGridData = { ...gridData, [id]: "X" };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gridData: newGridData }),
    };

    fetch("http://localhost:3001/step", requestOptions)
      .then((res) => res.json())
      .then((data) => setGridData(data));
  };

  return (
    <div className="grid">
      {cellIds.map((id) => (
        <Cell
          id={id}
          value={gridData[id]}
          onCellClick={(e) => onCellClick(e, id)}
          key={id}
        />
      ))}
    </div>
  );
};

export default Grid;
