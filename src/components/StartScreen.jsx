import styles from "./styles/StartScreen.module.css";

const Logo = () => {
  return (
    <>
      <h1 className={styles.logo}><span className={styles.guess}>Guess</span><span className={styles.the}>The</span><span className={styles.word}>Word</span></h1>
    </>
    )
}

const Button = ({handleClick}) => {
  return (
    <>
      <button onClick={handleClick}>Start</button>
    </>
  )
}

const StartScreen = () => {
  return (
    <div>
    <Logo />
    <Button />
    </div>
  )
}

export default StartScreen;