import './App.css'
import React from 'react'
import { SetTimes } from './SetTimes'
import { useTimer } from 'react-timer-hook'

function App() {
  const [statusName, setStatusName] = React.useState('Session')
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + sessionLength); // 10 minutes timer
  
  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: time, autoStart: false, onExpire: () => console.warn('onExpire called') });
  
  const handleStartStop = () => (isRunning ? pause() : resume())
  
  // make always 2 digits, fill zeros at start if necessary
  const twoDigitTime = (time) => String(time).padStart(2, '0')

  return (
    <div className="App">
      <div className='top-row'>
        <SetTimes name="Break" setBreakLength={setBreakLength} breakLength={breakLength} isRunning={isRunning} />
        <SetTimes name="Session" setSessionLength={setSessionLength} sessionLength={sessionLength} isRunning={isRunning} />
      </div>

      <div className='bottom-row'>
        <p id='timer-label'>{statusName}</p>
        <div>
          <span>{twoDigitTime(minutes)}</span>
          :
          <span>{twoDigitTime(seconds)}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <div className='start-stop-container'>

          <button onClick={handleStartStop}>
            { isRunning ? 'Stop' : 'Start' }
          </button>
          <button onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 5);
            
            restart(time, false)
          }}>Reset</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
