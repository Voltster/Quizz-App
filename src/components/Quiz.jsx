import React, { useState, useEffect } from 'react';
import { QuizData } from '../Data/QuizData';
import Result from './Result';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        // Load state from localStorage
        const storedQuizState = JSON.parse(localStorage.getItem('quizState'));
        if (storedQuizState) {
            setCurrentQuestion(storedQuizState.currentQuestion);
            setScore(storedQuizState.score);
            setClickedOption(storedQuizState.clickedOption);
            setShowResult(storedQuizState.showResult);
        }
    }, []);

    useEffect(() => {
        // Save state to localStorage
        localStorage.setItem('quizState', JSON.stringify({
            currentQuestion,
            score,
            clickedOption,
            showResult
        }));
    }, [currentQuestion, score, clickedOption, showResult]);

    const changeQuestion = () => {
        // Update score
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
        // Move to next question
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            // Show result
            setShowResult(true);
        }
    }

    const resetQuiz = () => {
        // Reset quiz state
        setCurrentQuestion(0);
        setScore(0);
        setClickedOption(0);
        setShowResult(false);
        // Remove state from localStorage
        localStorage.removeItem('quizState');
    }

    return (
        <div>
            <p className="heading-txt">Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <Result score={score} totalScore={QuizData.length} tryAgain={resetQuiz} />
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => (
                                <button
                                    key={i}
                                    className={`option-btn ${clickedOption === i + 1 ? "checked" : ""}`}
                                    onClick={() => setClickedOption(i + 1)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Quiz;
