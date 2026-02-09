import styles from "../css/LabelScore.module.css";

//Component for displaying label and score
function LabelScore({ label, score, textColor }) {
  return (
    <div className={styles.root}>
<<<<<<< HEAD
      <p className={textColor ? styles[textColor] : ""}>{label}</p>
=======
      <p className={styles[textColor]}>{label}</p>
>>>>>>> 27d7add (fix: Change starting player every time playing board resets)
      <p>{score}</p>
    </div>
  );
}

export default LabelScore;
