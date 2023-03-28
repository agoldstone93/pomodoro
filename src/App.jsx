import './App.css'
import React from 'react'
import { SetTimes } from './SetTimes'

function App() {
  const [statusName, setStatusName] = React.useState('Session')
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  const [timeLeft, setTimeLeft] = React.useState(25)

  const reset = () => {
    setBreakLength(5)
    setSessionLength(25)
    setTimeLeft(25)
  }

  const timer = () => {
    setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
  }

  return (
    <div className="App">
      <div className='top-row'>
        <SetTimes name="Break" setBreakLength={setBreakLength} breakLength={breakLength} />
        <SetTimes name="Session" setSessionLength={setSessionLength} sessionLength={sessionLength} />
      </div>
      <div>
        <p id='timer-label'>{statusName}</p>
        <p id='time-left'>{timeLeft}</p>
      </div>
      <button id='start_stop' onClick={timer}>Start/stop</button>
      <button id='reset' onClick={reset}>Reset</button>
    </div>
    
  )
}

export default App
