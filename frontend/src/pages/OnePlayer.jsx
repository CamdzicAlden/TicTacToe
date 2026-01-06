import DarkLightIcon from "../components/DarkLightIcon";
import LabelScore from "../components/LabelScore";
import PlayingBoard from "../components/PlayingBoard";
import { useState } from "react";

import pageStyle from "../css/PageStyle.module.css";

function OnePlayer() {
  const [pl1Score, setPl1Score] = useState(0);
  const [pl2Score, setPl2Score] = useState(0);
  const [tie, setTie] = useState(0);

  return (
    <div className={pageStyle.root}>
      <DarkLightIcon />
      <PlayingBoard
        clickingEnabled={true}
        mode="onePlayer"
        setPl1Score={setPl1Score}
        setPl2Score={setPl2Score}
        setTie={setTie}
      />
      <div className={pageStyle.label}>
        <LabelScore label="PLAYER" score={pl1Score} />
        <LabelScore label="TIE" score={tie} />
        <LabelScore label="COMPUTER" score={pl2Score} />
      </div>
    </div>
  );
}

export default OnePlayer;
