import TicTacToe from "../components/TicTacToe";
import NavigationButton from "../components/NavigationButton";
import DarkLightIcon from "../components/DarkLightIcon";

import pageStyle from "../css/LandingPage.module.css";
import PlayingBoard from "../components/PlayingBoard";

function LandingPage() {
  return (
    <div className={pageStyle.root}>
      <TicTacToe className="topLeft" />
      <TicTacToe className="bottomRight" />
      <DarkLightIcon />

      <PlayingBoard clickingEnabled={false} />
      <NavigationButton content={"1 PLAYER"} />
      <NavigationButton content={"2 PLAYERS"} />
    </div>
  );
}

export default LandingPage;
