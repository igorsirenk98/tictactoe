const express = require("express");
const getRandomNumberInRange = require("./utils/getRandomNumberInRange");

const app = express();
const cors = require('cors');

const PORT = 3001;
const MIN_CHOICE = 0;
const SYMBOL_TO_PUT = 'O';

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.post("/step", (req, res) => {
  const { gridData } = req.body;
  const emptyCells = Object.entries(gridData).filter(([_, value]) => !value);

  if (!emptyCells.length) {
      return res.send(gridData);
  };
  
  const serverIndexChoice = getRandomNumberInRange(MIN_CHOICE, emptyCells.length);
  const cellToFill = emptyCells[serverIndexChoice];
  const cellId = cellToFill[0];
  const newGridData = {...gridData, [cellId]: SYMBOL_TO_PUT};

  return res.send(newGridData);
});
