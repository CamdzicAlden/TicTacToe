import { useTheme } from "../contexts/ThemeContext";
import boardStyles from "../css/PlayingBoard.module.css";
import { useState, useEffect } from "react";

function PlayingBoard({
  clickingEnabled,
  page,
  mode,
  setPl1Score,
  setPl2Score,
}) {
  const { theme } = useTheme();
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState("X");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winner = calculateWinner(board);

  //Function for handling clicks
  function handleClick(index) {
    if (winner) {
      setBoard(Array(9).fill(null));
      setTurn("X");
      return;
    }
    if (board[index]) return;

    const nextBoard = [...board];
    nextBoard[index] = turn;
    setBoard(nextBoard);

    setTurn(turn === "X" ? "O" : "X");
  }

  function calculateWinner(board) {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  useEffect(() => {
    if (winner === "X") setPl1Score((prev) => prev + 1);
    else if (winner === "O") setPl2Score((prev) => prev + 1);
  }, [winner]);

  useEffect(() => {
    if (mode !== "onePlayer") return;
    if (turn !== "O") return;
    if (winner) return;

    const emptyCells = board
      .map((value, index) => (value === null ? index : null))
      .filter((v) => v !== null);

    if (emptyCells.length === 0) return;

    const randomIndex =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];

    const nextBoard = [...board];
    nextBoard[randomIndex] = "O";

    setTimeout(() => {
      setBoard(nextBoard);
      setTurn("X");
    }, 500);
  }, [board, turn, mode, winner]);

  return (
    <svg
      viewBox="0 0 101 101"
      className={`${boardStyles.root} ${
        theme === "dark" ? boardStyles.darkMode : boardStyles.lightMode
      } ${page === "landing" ? boardStyles.size1 : boardStyles.size2}`}
    >
      <line x1="33" y1="1" x2="33" y2="100" />
      <line x1="66" y1="1" x2="66" y2="100" />
      <line x1="1" y1="33" x2="100" y2="33" />
      <line x1="1" y1="66" x2="100" y2="66" />

      {board.map((value, index) => (
        <Cell
          key={index}
          index={index}
          value={value}
          clickingEnabled={clickingEnabled}
          onClick={handleClick}
        />
      ))}
    </svg>
  );
}

export default PlayingBoard;

function Cell({ index, value, onClick, clickingEnabled }) {
  const size = 33;

  const col = index % 3;
  const row = Math.floor(index / 3);

  const x = col * size;
  const y = row * size;

  return (
    <g
      onClick={() => clickingEnabled && onClick(index)}
      className={clickingEnabled ? boardStyles.cell : undefined}
    >
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
