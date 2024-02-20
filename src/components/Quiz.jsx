import { useState, useContext } from "react";
import questions from "../Helpers/QuestionsData";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
  const { setGameScore } = useContext(QuizContext);
  const { setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const handleNextQuestion = () => {
    if (optionChosen === questions[currentQuestion].answer) {
      setGameScore((prevState) => prevState + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setGameState("endScreen");
    } else {
      setCurrentQuestion((prevState) => prevState + 1);
    }
  };

  return (
    <div className="Quiz">
      <h1>{questions[currentQuestion].text}</h1>
      <div className="Quiz-options">
        <button onClick={() => setOptionChosen("A")}>
          {questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {questions[currentQuestion].optionD}
        </button>
      </div>
      <button onClick={handleNextQuestion}>Next question</button>
    </div>
  );
}

export default Quiz;
