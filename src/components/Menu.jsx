import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../styles/Menu.css";

function Menu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button onClick={() => setGameState("quiz")}>Start Game</button>
    </div>
  );
}

export default Menu;
