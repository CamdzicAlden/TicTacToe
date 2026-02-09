import styles from "../css/LabelScore.module.css";

//Component for displaying label and score
function LabelScore({ label, score, textColor }) {
  return (
    <div className={styles.root}>
      <p className={textColor ? styles[textColor] : ""}>{label}</p>
      <p>{score}</p>
    </div>
  );
}

export default LabelScore;
