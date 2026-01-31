import TicTacToe from "../components/TicTacToe";
import NavigationButton from "../components/NavigationButton";
import DarkLightIcon from "../components/DarkLightIcon";

import pageStyle from "../css/PageStyle.module.css";
import PlayingBoard from "../components/PlayingBoard";
import { Link } from "react-router-dom";

//Landing page component
function LandingPage() {
  return (
    //Main container
    <div className={pageStyle.root}>
      <TicTacToe className="topLeft" />
      <TicTacToe className="bottomRight" />
      <DarkLightIcon />

      {/*Playing board animation*/}
      <PlayingBoard clickingEnabled={false} page="landing" />

      {/*Navigation buttons*/}
      <div className={pageStyle.navButtons}>
        <Link to="/onePlayer">
          <NavigationButton content={"1 PLAYER"} />
        </Link>

        <Link to="/twoPlayers">
          <NavigationButton content={"2 PLAYERS"} />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
