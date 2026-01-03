import DarkLightIcon from "../components/DarkLightIcon";
import PlayingBoard from "../components/PlayingBoard";
import pageStyle from "../css/PageStyle.module.css";

function TwoPlayers() {
  return (
    <div className={pageStyle.root}>
      <DarkLightIcon />
      <PlayingBoard clickingEnabled={true} />
    </div>
  );
}

export default TwoPlayers;
