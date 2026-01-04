import DarkLightIcon from "../components/DarkLightIcon";
import PlayingBoard from "../components/PlayingBoard";
import LabelScore from "../components/LabelScore";
import pageStyle from "../css/PageStyle.module.css";
import { useState } from "react";

function TwoPlayers() {
  const [pl1Score, setPl1Score] = useState(0);
  const [pl2Score, setPl2Score] = useState(0);

  return (
    <div className={pageStyle.root}>
      <DarkLightIcon />
      <PlayingBoard
        clickingEnabled={true}
        mode="twoPlayers"
        setPl1Score={setPl1Score}
        setPl2Score={setPl2Score}
      />
      <div className={pageStyle.label}>
        <LabelScore label="PLAYER 1" score={pl1Score} />
        <LabelScore label="PLAYER 2" score={pl2Score} />
      </div>
    </div>
  );
}

export default TwoPlayers;
