import  { useState, useEffect } from "react";
import { QuizData } from "../Data/QuizData";
import Result from "./Result";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const storedQuizState = JSON.parse(localStorage.getItem("quizState"));
    if (storedQuizState) {
      setCurrentQuestion(storedQuizState.currentQuestion);
      setScore(storedQuizState.score);
      setClickedOption(storedQuizState.clickedOption);
      setShowResult(storedQuizState.showResult);
    }
  }, []);

  useEffect(() => {
    const quizState = {
      currentQuestion,
      score,
      clickedOption,
      showResult,
    };
    localStorage.setItem("quizState", JSON.stringify(quizState));
  }, [currentQuestion, score, clickedOption, showResult]);

  const changeQuestion = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setClickedOption(0);
    setShowResult(false);
    localStorage.removeItem("quizState");
  };

  return (
    <div className="mx-4">
      <p className="text-4xl text-white text-center font-bold mb-2">
        Quiz App
      </p>
      <div className="flex items-center justify-center flex-col bg-slate-200 py-4 px-8 rounded-lg w-[350px] sm:w-[450px] min-h-[475px] relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        {showResult ? (
          <Result
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetQuiz}
          />
        ) : (
          <>
            <div className="question text-xl py-2 px-4 border-gray-400 border rounded-sm text-center">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="flex flex-col w-full mt-6">
              {QuizData[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  className={`option-btn  py-2 my-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-sm border-blue-500 hover:border-2 h-11 ${
                    clickedOption === i + 1 ? "bg-blue-400" : ""
                  }`}
                  onClick={() => setClickedOption(i + 1)}
                >
                  {option}
                </button>
              ))}
            </div>
            <input
              className="absolute bottom-4 bg-blue-500 py-2 px-8 rounded-md cursor-pointer hover:bg-blue-600 active:bg-blue-500 "
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
