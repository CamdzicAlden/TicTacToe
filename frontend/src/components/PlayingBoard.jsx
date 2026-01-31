import { useTheme } from "../contexts/ThemeContext";
import boardStyles from "../css/PlayingBoard.module.css";
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

//Playing board component
function PlayingBoard({
  clickingEnabled,
  page,
  mode,
  setPl1Score,
  setPl2Score,
  setTie,
}) {
  //Variables declaration
  const { theme } = useTheme();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [draw, setDraw] = useState(false);
  const [turn, setTurn] = useState("X");
  //Array with all possible wining combos
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

  const [winner, setWinner] = useState(null);
  const timerRef = useRef(null);

  //Logic for landing page animation
  useEffect(() => {
    if (clickingEnabled) return;

    //Moves for animation
    const moves = [
      [0, "X"],
      [5, "O"],
      [2, "X"],
      [1, "O"],
      [4, "X"],
      [6, "O"],
      [8, "X"],
    ];

    let x = 0;

    //Play move every 400 ms
    const interval = setInterval(() => {
      //If all moves are played
      if (x >= moves.length) {
        clearInterval(interval);
        return;
      }

      //Force react to rerender
      flushSync(() => {
        //Update playing board with moves
        setBoard((prev) => {
          const next = [...prev];
          next[moves[x][0]] = moves[x][1];
          return next;
        });
      });

      x++;
    }, 400);
  }, [clickingEnabled]);

  //Function for handling clicks
  function handleClick(index) {
    //First click after win or draw
    if (winner || draw) {
      setBoard(Array(9).fill(null));
      setTurn("X");
      setDraw(false);
      setWinner(null);
      return;
    }

    //Preventing clicking while its computer turn
    if (mode === "twoPlayers" || turn === "X") {
      if (board[index]) return; //If not empty

      const nextBoard = [...board];
      //Set value of current turn (X or O) to index
      nextBoard[index] = turn;
      setBoard(nextBoard);

      setTurn(turn === "X" ? "O" : "X"); //Change turn
    }
  }

  //Function for getting the winning combo
  function calculateWinner(board) {
    //Go through every winning combo
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      //Check if our board has same value on all of them
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return combo; //return winning combo
      }
    }
    return null;
  }

  //Function for getting winning line coodinates
  function getWinningLineCords(combo) {
    const size = 33;
    const [a, , c] = combo; //First and last index

    //Getting rows and columns indexes
    const rowA = Math.floor(a / 3);
    const colA = a % 3;
    const rowC = Math.floor(c / 3);
    const colC = c % 3;

    //Getting cells center for both indexes
    const xA = colA * size + size / 2;
    const yA = rowA * size + size / 2;
    const xC = colC * size + size / 2;
    const yC = rowC * size + size / 2;

    //Returning centers coordinates
    return { xA, yA, xC, yC };
  }

  //Function for getting winning move if there is one
  function findWinningMove(board, player) {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      const values = [board[a], board[b], board[c]];

      if (
        values.filter((value) => value === player).length === 2 &&
        values.includes(null)
      ) {
        return combo[values.indexOf(null)];
      }
    }
    return null;
  }

  //Logic for displaying score
  useEffect(() => {
    if (!winner || !clickingEnabled) return;
    if (board[winner[0]] === "X") setPl1Score((prev) => prev + 1);
    else if (board[winner[0]] === "O") setPl2Score((prev) => prev + 1);
  }, [winner]);

  useEffect(() => {
    if (!draw || !clickingEnabled) return;
    setTie((prev) => prev + 1);
  }, [draw]);

  //AI logic
  useEffect(() => {
    if (mode !== "onePlayer") return;
    if (turn !== "O") return;
    if (winner) return;

    const emptyCells = board
      .map((value, index) => (value === null ? index : null))
      .filter((v) => v !== null);

    if (emptyCells.length === 0) return;

    let move = null;

    move = findWinningMove(board, "O");

    if (move === null) move = findWinningMove(board, "X");

    if (move === null && board[4] === null) move = 4;

    if (move === null) {
      const corners = [0, 2, 6, 8].filter((i) => board[i] === null);
      if (corners.length) {
        move = corners[Math.floor(Math.random() * corners.length)];
      }
    }

    if (move === null) {
      move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    const nextBoard = [...board];
    nextBoard[move] = "O";

    timerRef.current = setTimeout(() => {
      setBoard(nextBoard);
      setTurn("X");
    }, 400);

    return () => clearTimeout(timerRef.current);
  }, [board, turn, mode, winner]);

  //Check if there is a winner or draw on every board change
  useEffect(() => {
    const combo = calculateWinner(board);
    if (combo && !winner) {
      setWinner(combo);
      return;
    }

    if (!winner && board.every((cell) => cell !== null)) setDraw(true);
  }, [board, winner]);

  //Returning elements
  return (
    //Svg container for board
    <svg
      viewBox="0 0 100 100"
      className={`${boardStyles.root} ${
        theme === "dark" ? boardStyles.darkMode : boardStyles.lightMode
      } ${page === "landing" ? boardStyles.size1 : boardStyles.size2} ${
        draw ? boardStyles.draw : ""
      }`}
    >
      {/*Svg lines for board drawing*/}
      <line x1="33" y1="1" x2="33" y2="99" />
      <line x1="66" y1="1" x2="66" y2="99" />
      <line x1="1" y1="33" x2="99" y2="33" />
      <line x1="1" y1="66" x2="99" y2="66" />

      {/*Mapping through board array and creating cell for each value*/}
      {board.map((value, index) => (
        <Cell
          key={index}
          index={index}
          value={value}
          clickingEnabled={clickingEnabled}
          winner={winner}
          draw={draw}
          onClick={handleClick}
        />
      ))}

      {/*If there is a winner*/}
      {winner &&
        (() => {
          {
            /*Getting winning line coords and length*/
          }
          const { xA, yA, xC, yC } = getWinningLineCords(winner);
          const length = Math.sqrt((xC - xA) ** 2 + (yC - yA) ** 2);

          {
            /*Drawing winning line*/
          }
          return (
            <line
              x1={xA}
              y1={yA}
              x2={xC}
              y2={yC}
              className={boardStyles.winningLine}
              style={{ strokeDasharray: length, strokeDashoffset: length }}
            />
          );
        })()}
    </svg>
  );
}

export default PlayingBoard;

//Cell component
function Cell({ index, value, onClick, clickingEnabled, winner, draw }) {
  const size = 33;

  const col = index % 3;
  const row = Math.floor(index / 3);

  //Calculating position of cells top left corner
  const x = col * size;
  const y = row * size;

  const opacity = winner && !winner.includes(index) ? 0.3 : draw ? 0.3 : 1;

  return (
    //Returning svg group of elements
    <g
      onClick={() => clickingEnabled && onClick(index)}
      className={clickingEnabled ? boardStyles.cell : undefined}
    >
      {/*Drawing trasparent rectangle (clickable area)*/}
      <rect x={x} y={y} width={size} height={size} fill="transparent" />

      {/*If there is a value*/}
      {value && (
        //Positioning group
        <g transform={`translate(${x + size / 2}, ${y + size / 2})`}>
          {/* Animation group */}
          <g
            className={`${boardStyles.mark} ${
              winner && winner.includes(index) ? boardStyles.winningMark : ""
            }`}
            style={{ "--mark-opacity": opacity }}
          >
            <text
              x={0}
              y={0}
              dy="0.08em"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="20"
              className={value === "X" ? boardStyles.X : boardStyles.O}
            >
              {value}
            </text>
          </g>
        </g>
      )}
    </g>
  );
}
