import React from 'react';

const WelcomeScreen = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz App!</h1>
      <p className='text-xl'>Click the button below to start the quiz!</p>
      <button onClick={onStartQuiz} className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600">
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomeScreen;
