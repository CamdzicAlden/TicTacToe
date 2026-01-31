import styles from "../css/LabelScore.module.css";

//Component for displaying label and score
function LabelScore({ label, score }) {
  return (
    <div className={styles.root}>
      <p>{label}</p>
      <p>{score}</p>
    </div>
  );
}

export default LabelScore;
