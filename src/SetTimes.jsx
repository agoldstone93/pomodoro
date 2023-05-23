import React from "react";
import "./SetTimes.css";

export function SetTimes({
  name,
  setStatusDuration,
  statusDuration,
  isRunning,
}) {
  const increment = () => {
    if (statusDuration < 60) setStatusDuration(statusDuration + 1);
  };

  const decrement = () => {
    if (statusDuration > 1) setStatusDuration(statusDuration - 1);
  };

  return (
    <div className="container">
      <p id={`${name.toLowerCase()}-label`}>{name} length</p>
      <button
        onClick={decrement}
        id={`${name.toLowerCase()}-decrement`}
        className="plus-minus-buttons"
        disabled={isRunning}
      >
        -
      </button>

      <p id={`${name.toLowerCase()}-length`}>{statusDuration}</p>

      <button
        onClick={increment}
        id={`${name.toLowerCase()}-increment`}
        className="plus-minus-buttons"
        disabled={isRunning}
      >
        +
      </button>
    </div>
  );
}
