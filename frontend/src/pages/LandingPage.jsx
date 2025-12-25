import TicTacToe from "../components/TicTacToe";

function LandingPage() {
  return (
    <>
      <TicTacToe className="topLeft" />
      <TicTacToe className="bottomRight" />
    </>
  );
}

export default LandingPage;
