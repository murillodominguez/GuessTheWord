import styles from "./styles/GameOver.module.css";

const Button = ({ handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>Play Again</button>
  )
}

const GameOver = ({ retry, score }) => {

  return (
    <div className="gameOverContainer">
      <h1 className={styles.gameOver}>Game Over!</h1>
      <h2>Your score was: <span className={styles.score}>{score}</span></h2>
      <Button handleClick={retry} />
    </div>
  )
}
export default GameOver