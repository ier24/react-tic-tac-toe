import { SquareValue } from "../../types/Square";
import "./Square.css";

type SquareProps = {
  value: SquareValue;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
