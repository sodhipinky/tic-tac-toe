import PropTypes from 'prop-types';
import { useState } from 'react';

function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  function handleClick(index) {
    if(squares[index] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[index] = 'X';
    }
    else {
      newSquares[index] = 'O';
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }
  
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  }
  else if(squares.every((square) => square !== null)) {
    status = 'Draw';
  }
  else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={ () => handleClick(0) } />
        <Square value={squares[1]} onSquareClick={ () => handleClick(1) } />
        <Square value={squares[2]} onSquareClick={ () => handleClick(2) } />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={ () => handleClick(3) } />
        <Square value={squares[4]} onSquareClick={ () => handleClick(4) } />
        <Square value={squares[5]} onSquareClick={ () => handleClick(5) } />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={ () => handleClick(6) } />
        <Square value={squares[7]} onSquareClick={ () => handleClick(7) } />
        <Square value={squares[8]} onSquareClick={ () => handleClick(8) } />
      </div>
    </>
  )
}

function Square({value, onSquareClick}) {
  return (
    <button
      className="square"
      onClick={onSquareClick}>
      {value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.any,
  onSquareClick: PropTypes.func,
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // 1st diagonal
    [2, 4, 6], // 2nd diagonal
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Board;