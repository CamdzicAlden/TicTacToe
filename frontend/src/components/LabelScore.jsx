import styles from "../css/LabelScore.module.css";

function LabelScore({ label, score }) {
  return (
    <div className={styles.root}>
      <p>{label}</p>
      <p>{score}</p>
    </div>
  );
}

export default LabelScore;
