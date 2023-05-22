import './App.css'
import React, { useEffect } from 'react'
import { SetTimes } from './SetTimes'

function App() {
  const [statusName, setStatusName] = React.useState('Session')
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  const [timeLeft, setTimeLeft] = React.useState(25)
  const [isRunning, setIsRunning] = React.useState(false)

  const handleReset = () => {
    setBreakLength(5)
    setSessionLength(25)
    setIsRunning(false)
    setTimeLeft(25)
    clearTimeout()
  }
  
  const handleStart = () => {
    setIsRunning((prevIsRunning) => {
      if (prevIsRunning == true)
        return false
      else
        return true
    })
  }
  
  useEffect(() => {
    if(isRunning && timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
      }, 1000)
    } else {
      clearTimeout()
    }
  }, [timeLeft, isRunning])

  return (
    <div className="App">
      <div className='top-row'>
        <SetTimes name="Break" setBreakLength={setBreakLength} breakLength={breakLength} isRunning={isRunning} />
        <SetTimes name="Session" setSessionLength={setSessionLength} sessionLength={sessionLength} isRunning={isRunning} />
      </div>
      <div className='bottom-row'>
        <p id='timer-label'>{statusName}</p>
        <p id='time-left'>{timeLeft}</p>
        <div className='start-stop-container'>
          <button id='start_stop' onClick={handleStart}>
            { isRunning ? 'Stop' : 'Start' }
          </button>
          <button id='reset' onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
