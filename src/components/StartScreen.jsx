import styles from "./styles/StartScreen.module.css";

const Logo = () => {
  return (
      <h1 className={styles.logo}><span className={styles.guess}>Guess</span><span className={styles.the}>The</span><span className={styles.word}>Word</span></h1>
    )
}

const Button = ({ handleClick }) => {
  return (
      <button onClick={handleClick}>Start</button>
  )
}

const StartScreen = ({ startGame }) => {
  return (
    <div>
    <Logo />
    <Button handleClick={startGame}/>
    </div>
  )
}

export default StartScreen;