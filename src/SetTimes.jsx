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

  return (
    <div class='container'>
      <p id={`${name.toLowerCase()}-label`}>{name} length</p>
      <button id={`${name.toLowerCase()}-decrement`}>-</button>
      <p id={`${name.toLowerCase()}-length`}>{times()}</p>
      <button onClick={increment} id={`${name.toLowerCase()}-increment`}>+</button>
    </div>
  );
}
