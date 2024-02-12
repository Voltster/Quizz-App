import React from 'react';

const NextButton = ({ onNextQuestion }) => {
  return (
    <button onClick={onNextQuestion} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none">
      Next Question
    </button>
  );
};

export default NextButton;
