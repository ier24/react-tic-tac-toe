import { SquareValue } from "../../types/Square";
import Square from "../Square/Square";
import "./Board.css";

type BoardProps = {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
};

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const winner: SquareValue = calculateWinner(squares);

  let status: string;

  status = winner
    ? `勝者: ${winner}`
    : squares.every(Boolean) // winnerがfalsyな値(null)の場合に、マスがすべて埋まっているかを確認。
    ? "引き分けです！！" // マスがすべて埋まっていたら引き分け。
    : `次のプレーヤー: ${xIsNext ? "X" : "O"}`; // 埋まって無ければ次のプレイヤーに。

  function handleClick(i: number) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Board;

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
