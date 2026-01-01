import TicTacToe from "../components/TicTacToe";
import NavigationButton from "../components/NavigationButton";

import pageStyle from "../css/LandingPage.module.css";

function LandingPage() {
  return (
    <div className={pageStyle.root}>
      <TicTacToe className="topLeft" />
      <TicTacToe className="bottomRight" />

      <NavigationButton content={"1 PLAYER"} className="darkMode" />
      <NavigationButton content={"2 PLAYERS"} className="darkMode" />
    </div>
  );
}

export default LandingPage;
