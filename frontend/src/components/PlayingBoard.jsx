import boardStyles from "../css/PlayingBoard.module.css";
import { useState } from "react";

function PlayingBoard({ clickingEnabled }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  //Function for handling clicks
  function handleClick(index) {
    if (board[index]) return;

    const nextBoard = [...board];
    nextBoard[index] = turn;
    setBoard(nextBoard);

    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <svg viewBox="0 0 101 101" className={boardStyles.root}>
      <line x1="33" y1="1" x2="33" y2="100" />
      <line x1="66" y1="1" x2="66" y2="100" />
      <line x1="1" y1="33" x2="100" y2="33" />
      <line x1="1" y1="66" x2="100" y2="66" />

      {board.map((value, index) => (
        <Cell
          key={index}
          index={index}
          value={value}
          onClick={() => clickingEnabled && handleClick}
        />
      ))}
    </svg>
  );
}

export default PlayingBoard;

function Cell({ index, value, onClick }) {
  const size = 33;

  const col = index % 3;
  const row = Math.floor(index / 3);

  const x = col * size;
  const y = row * size;

  return (
    <g onClick={() => onClick(index)}>
      <rect x={x} y={y} width={size} height={size} fill="transparent" />

      {value && (
        <text
          x={x + size / 2}
          y={y + size / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="20"
          className={value === "X" ? boardStyles.X : boardStyles.O}
        >
          {value}
        </text>
      )}
    </g>
  );
}
