import { useState } from "react";
import "./styles/App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [gameScore, setGameScore] = useState(0);

  return (
    <main className="App">
      <header>
        <h1>Quiz App</h1>
      </header>
      <QuizContext.Provider
        value={{ gameState, setGameState, gameScore, setGameScore }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </main>
  );
}

export default App;
