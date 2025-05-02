import styles from "./styles/GameOver.module.css";

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Jogar novamente</button>
  )
}

const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <Button handleClick={retry} />
    </div>
  )
}
export default GameOver