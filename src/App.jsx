import './App.css';

import { useCallback, useEffect, useState } from 'react';

import { words as wordList } from "./data/words.js";

import StartScreen from './components/StartScreen.jsx';
import Game from './components/Game.jsx';
import GameOver from './components/GameOver.jsx';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [lettersFound, setLettersFound] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const guessesQty = 3;

  const pickCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    console.log(category);
    return category;
  }

  const pickWord = (category) => {
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word)
    return word;
  }

  const startGame = () => {
    const category = pickCategory();
    const word = pickWord(category);

    let wordLetters = word.split("");
    
    wordLetters = wordLetters.map(l => l.toLowerCase());
    console.log(wordLetters);

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if(lettersFound.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letters.includes(normalizedLetter)) {
      setLettersFound(prevState => [
        ...prevState,
        normalizedLetter
      ]);
    } else {
      setWrongLetters(prevState => [
        ...prevState,
        normalizedLetter
      ]);

      setGuesses(prevState => prevState - 1);
    }
  }

  const clearLettersStates = () => {
    setLettersFound([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(guesses <= 0){
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} letters={letters} category={pickedCategory} word={pickedWord} lettersFound={lettersFound} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
