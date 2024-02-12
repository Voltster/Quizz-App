

const Options = ({ options, onAnswerSelected }) => {
  return (
    <div className="flex flex-col space-y-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswerSelected(option)}
          className="bg-gray-200 px-4 py-2 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
