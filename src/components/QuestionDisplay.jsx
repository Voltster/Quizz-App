import React from 'react';

const QuestionDisplay = ({ question }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{question}</h2>
    </div>
  );
};

export default QuestionDisplay;
