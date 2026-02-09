import DarkLightIcon from "../components/DarkLightIcon";
import PlayingBoard from "../components/PlayingBoard";
import LabelScore from "../components/LabelScore";
import pageStyle from "../css/PageStyle.module.css";
import { useState } from "react";
import { useTurn } from "../contexts/TurnContext";

//TwoPlayers page component
function TwoPlayers() {
  const [pl1Score, setPl1Score] = useState(0);
  const [pl2Score, setPl2Score] = useState(0);
  const [tie, setTie] = useState(0);

<<<<<<< HEAD
  //Changing label text color every time turn changes
  const { turn } = useTurn();
  const pl1Class = turn === "X" ? "redText" : null;
  const pl2Class = turn === "O" ? "redText" : null;

  //Returning elements
  return (
    //Container
    <div className={pageStyle.root}>
      {/*Dark/light mode switching icon*/}
      <DarkLightIcon />

      {/*Playing board component*/}
      <PlayingBoard
        clickingEnabled={true}
        mode="twoPlayers"
        setPl1Score={setPl1Score}
        setPl2Score={setPl2Score}
        setTie={setTie}
      />

      {/*Labels container*/}
      <div className={pageStyle.label}>
        <LabelScore label="PLAYER 1" score={pl1Score} textColor={pl1Class} />
        <LabelScore label="TIE" score={tie} />
        <LabelScore label="PLAYER 2" score={pl2Score} textColor={pl2Class} />
      </div>
    </div>
  );
}

export default TwoPlayers;
