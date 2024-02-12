

function Result(props) {
  return (
    <>
    <div className='text-2xl flex flex-col items-center  gap-y-4 '>
        Your Score is 
        <div className=' bg-green-400 py-4 px-6 rounded-lg'>
        {props.score}/{props.totalScore}
        </div>
        
        Total Question: {props.totalScore}
    </div>
    <button className='bg-blue-500 py-2 px-8 rounded-md cursor-pointer hover:bg-blue-600 active:bg-blue-500 mt-6' id="next-button" onClick={props.tryAgain}>Play Again</button>
    </>
  )
}

export default Result