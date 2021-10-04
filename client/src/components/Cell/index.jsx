import "./styles.css";

const Cell = ({ id, onCellClick, value }) => (
  <button
    disabled={!!value}
    id={`cell_${id}`}
    className="cell"
    onClick={onCellClick}
  >
    {value}
  </button>
);

export default Cell;
