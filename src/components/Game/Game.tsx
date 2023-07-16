import { useState } from "react";
import Board from "../Board/Board";
import { SquareValue } from "../../types/Square";
import "./Game.css";

function Game() {
  const [history, setHistory] = useState<SquareValue[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  // 昇順=ascending=数字が小さい順
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    /**
     * スプレンド構文で展開した配列+新しい配列をセットしている。
     * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
     */
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const moves: JSX.Element[] = history.map(
    (squares: SquareValue[], move: number) => {
      let description;
      if (move > 0) {
        description = `${move}番目の手へ移動する`;
      } else {
        description = "ゲーム開始（初期状態）";
      }
      return (
        /**
         * > key は、各コンポーネントを識別するための情報を React に与えます。
         * これにより、再レンダー間で state を維持できるのです。
         * コンポーネントの key が変更されると、コンポーネントは破棄され、新しい state で再作成されます。
         * https://ja.react.dev/learn/tutorial-tic-tac-toe#picking-a-key
         */
        <ul key={move} className="game-history">
          <button onClick={() => jumpTo(move)}>{description}</button>
        </ul>
      );
    }
  );

  function handleSortToggle() {
    setIsAscending(!isAscending);
  }

  return (
    <div className="Game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div className="move">現在: {currentMove + 1}番手目です。</div>
        <button className="move" onClick={handleSortToggle}>
          {isAscending ? "新しい順に並べ替える" : "古い順に並べ替える"}
        </button>
        <ol>{isAscending ? moves : moves.reverse()}</ol>
      </div>
    </div>
  );
}

export default Game;
