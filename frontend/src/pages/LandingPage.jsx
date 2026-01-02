import TicTacToe from "../components/TicTacToe";
import NavigationButton from "../components/NavigationButton";
import DarkLightIcon from "../components/DarkLightIcon";

import pageStyle from "../css/LandingPage.module.css";

function LandingPage() {
  return (
    <div className={pageStyle.root}>
      <TicTacToe className="topLeft" />
      <TicTacToe className="bottomRight" />
      <DarkLightIcon />

      <NavigationButton content={"1 PLAYER"} />
      <NavigationButton content={"2 PLAYERS"} />
    </div>
  );
}

export default LandingPage;
