import React, { useState } from "react";
 
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
 
  const handleClick = (index) => {
    if (board[index] || winner) return;
 
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
 
  const renderSquare = (index) => (
<button className="square" onClick={() => handleClick(index)}>
      {board[index]}
</button>
  );
 
  return (
<div className="game">
<h1>Tic-Tac-Toe</h1>
<div className="board">
        {[0, 1, 2].map((row) => (
<div key={row} className="board-row">
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
</div>
        ))}
</div>
<h2>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}</h2>
<button className="reset" onClick={() => setBoard(Array(9).fill(null))}>Reset</button>
<style>
        {`
          .game { text-align: center; font-family: Arial, sans-serif; }
          .board { display: flex; flex-direction: column; align-items: center; }
          .board-row { display: flex; }
          .square { width: 60px; height: 60px; font-size: 24px; text-align: center; margin: 2px; cursor: pointer; border: 2px solid black; }
          .reset { margin-top: 10px; padding: 8px 16px; font-size: 16px; cursor: pointer; }
        `}
</style>
</div>
  );
};
 
const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};
 
export default App;
