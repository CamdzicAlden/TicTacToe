import TTTstyles from "../css/TicTacToe.module.css";

function TicTacToe({ className }) {
  return (
    <div className={`${TTTstyles.root} ${TTTstyles[className]}`}>
      <p>TIC</p>
      <p className={TTTstyles.indent1}>TAC</p>
      <p className={TTTstyles.indent2}>TOE</p>
    </div>
  );
}

export default TicTacToe;
