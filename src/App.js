import React,{useState} from 'react';
import Form from './Components/Form';
import Finished from './Components/Finished';
import Timer from './Components/Timer';
import './App.css';

function App() {
  const [timeLeft,setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  return (
   <>
   <h1 className="header">Pomodoro app</h1>
   <Form setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
   {timeLeft<0 ?
   <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>: 
    <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} 
    isPaused={isPaused} setIsPaused={setIsPaused}/> 
      
  }
   </>
   )
}

export default App;
