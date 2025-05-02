import styles from "./styles/Game.module.css";

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Tentar</button>
  )
}

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <Button handleClick={verifyLetter}/>
    </div>
  )
}
export default Game