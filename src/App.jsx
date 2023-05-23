import './App.css'
import React from 'react'
import { SetTimes } from './SetTimes'
import { useTimer } from 'react-timer-hook'
import { DisplayTime } from './DisplayTime'

function App() {
  const [statusName, setStatusName] = React.useState('Session')
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  
  const time = new Date();
  // session length timer (seconds)
  time.setSeconds(time.getSeconds() + sessionLength);
  
  const handleExpire = () => {
    if (statusName == "Session")
    setStatusName("Break")
    else
    setStatusName("Session")
    
    const time = new Date();
    time.setSeconds(time.getSeconds() + breakLength); // 10 minutes timer
    restart(time)
  }
  
  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: time, autoStart: false, onExpire: handleExpire });
  
  const handleStartStop = () => (isRunning ? pause() : resume())

  const handleReset = () => {
    // Restarts to 5 minutes timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5);

    restart(time, false)
  }

  return (
    <div className="App">
      <div className='top-row'>
        <SetTimes name="Break" setBreakLength={setBreakLength} breakLength={breakLength} isRunning={isRunning} />
        <SetTimes name="Session" setSessionLength={setSessionLength} sessionLength={sessionLength} isRunning={isRunning} />
      </div>

      <div className='bottom-row'>
        <p id='timer-label'>{statusName}</p>
        <DisplayTime minutes={minutes} seconds={seconds} />
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <div className='start-stop-container'>

          <button onClick={handleStartStop} id='start_stop'>
            { isRunning ? 'Stop' : 'Start' }
          </button>
          <button onClick={handleReset} id='reset'>Reset</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
