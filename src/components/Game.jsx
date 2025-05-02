import styles from "./styles/Game.module.css";
import { useState, useRef } from 'react';

const playMsgList = ["C'mon, guess!", "Try your best to guess this word!", "This one is for you, take your time!", "Guess this word.", "GuessTheWord!!"]

const Game = ({ verifyLetter, category, word, letters, lettersFound, wrongLetters, guesses, score}) => {

  const [playMsg] = useState(playMsgList[Math.floor(Math.random() * 5)]);
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Points: {score}</span>
      </p>
      <h1 className={styles.playMsg}>{playMsg}</h1>
      <h3 className={styles.tip}>
        Tip: <span style={{color: "yellow"}}>{category}</span>
      </h3>
      <p>You still got {guesses} try(s)</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) => lettersFound.includes(letter) ? <span key={i} className={styles.letter}>{letter}</span> : <span key={i} className={styles.letter}></span>)}
      </div>
      <div className={styles.letterContainer}>
        <p>Try to guess a letter of this word:</p>
        <form onSubmit={handleSubmit}>
          <input ref={letterInputRef} className={styles.letterInput} type="text" name="letter" onChange={e => setLetter(e.target.value)} maxLength={1} value={letter} required />
          <button className={styles.sendLetter}>Play!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letters already used:</p>
        {wrongLetters.map((letter,i) => i == (wrongLetters.length)-1 ? <span key={i}>{letter}</span> : <span key={i}>{letter}, </span>)}
      </div>
    </div>
  )
}
export default Game