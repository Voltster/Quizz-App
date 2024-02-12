// ResultsScreen.js
import React from 'react';

const ResultsScreen = ({ score, totalQuestions }) => {
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-2">Correct Answers: {correctAnswers}</p>
      <p className="text-xl mb-4">Incorrect Answers: {incorrectAnswers}</p>
      <button onClick={() => window.location.reload()} className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none">
        Restart Quiz
      </button>
    </div>
  );
};

export default ResultsScreen;
