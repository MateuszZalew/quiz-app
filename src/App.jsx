import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState === "menu" && <Menu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
    </div>
  );
}

export default App;
