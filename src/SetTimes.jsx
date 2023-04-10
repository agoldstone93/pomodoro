import React from 'react';
import './SetTimes.css';

export function SetTimes({ name, sessionLength, setSessionLength, breakLength, setBreakLength }) {

  const times = () => {
    if (name === 'Break')
      return breakLength;

    if (name === 'Session')
      return sessionLength;
  };

  const increment = () => {
    if (name === 'Break')
      setBreakLength(breakLength + 1);

    if (name === 'Session')
      setSessionLength(sessionLength + 1);
  };
  
  const decrement = () => {
    if (name === 'Break' && breakLength > 0)
      setBreakLength(breakLength - 1);

    if (name === 'Session' && sessionLength > 0)
      setSessionLength(sessionLength - 1);
  };

  return (
    <div className='container'>
      <p id={`${name.toLowerCase()}-label`}>{name} length</p>
      <button onClick={decrement} id={`${name.toLowerCase()}-decrement`} className='plus-minus-buttons'>-</button>
      <p id={`${name.toLowerCase()}-length`}>{times()}</p>
      <button onClick={increment} id={`${name.toLowerCase()}-increment` } className='plus-minus-buttons'>+</button>
    </div>
  );
}
