// QuizContainer.js
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import QuestionDisplay from './QuestionDisplay';
import Options from './Options';
import NextButton from './NextButton';
import ResultsScreen from './ResultsScreen';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  },
  {
    id: 3,
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Stephen King'],
    correctAnswer: 'Harper Lee'
  }
];

const TOTAL_QUESTIONS = questions.length;

function QuizContainer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedProgress = localStorage.getItem('quizProgress');
    if (storedProgress) {
      const { currentQuestionIndex: storedIndex, score: storedScore } = JSON.parse(storedProgress);
      setCurrentQuestionIndex(storedIndex);
      setScore(storedScore);
    }
  }, []);

  const handleAnswerSelection = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    localStorage.setItem('quizProgress', JSON.stringify({ currentQuestionIndex, score }));
  }, [currentQuestionIndex, score]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full max-w-lg p-4">
      {currentQuestionIndex === 0 && <WelcomeScreen onStartQuiz={() => setCurrentQuestionIndex(1)} />}
      {currentQuestionIndex > 0 && currentQuestionIndex <= TOTAL_QUESTIONS && (
        <div>
          <QuestionDisplay question={currentQuestion.question} />
          <Options options={currentQuestion.options} onAnswerSelected={handleAnswerSelection} />
          <NextButton onNextQuestion={handleNextQuestion} />
        </div>
      )}
      {currentQuestionIndex === TOTAL_QUESTIONS && (
        <ResultsScreen score={score} totalQuestions={TOTAL_QUESTIONS} />
      )}
    </div>
  );
}

export default QuizContainer;
