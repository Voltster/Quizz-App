import Quiz from './components/Quiz'
import WelcomeScreen from './components/WelcomeScreen'
import "./App.css"
import { useState } from 'react';


function App() {

  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <>
      {showQuiz ? <Quiz /> : <WelcomeScreen onStartQuiz={handleStartQuiz} />}
    </>
  )
}

export default App