import styles from "./styles/Game.module.css";
import { useState } from 'react';

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Tentar</button>
  )
}

const playMsgList = ["C'mon, guess!", "Try your best to guess this word!", "This one is for you, take your time!", "Guess this word.", "GuessTheWord!!"]

const Game = ({ verifyLetter, letters, category}) => {

  const [lettersFound, setLettersFound] = useState([])
  const [playMsg] = useState(playMsgList[Math.floor(Math.random() * 5)])

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Points: 000</span>
      </p>
      <h1 className={styles.playMsg}>{playMsg}</h1>
      <h3 className={styles.tip}>
        Tip: <span style={{color: "yellow"}}>{category}</span>
      </h3>
      <div className={styles.wordContainer}>
        {letters.map( letter => lettersFound.includes(letter) ? <span key={letter} className={styles.letter}>{letter}</span> : <span key={letter} className={styles.letter}></span>)}
      </div>
      <div className="letterContainer">
        <p>Try to guess a letter of this word:</p>
        <form>
          <input className={styles.letterInput} type="text" name="letter" maxLength={1} required />
          <button className={styles.sendLetter}>Play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letters already used:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
      <Button handleClick={verifyLetter}/>
    </div>
  )
}
export default Game