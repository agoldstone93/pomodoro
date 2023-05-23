import React from 'react';

export function DisplayTime({ minutes, seconds }) {
  // make always 2 digits, fill zeros at start if necessary
  const twoDigitTime = (time) => String(time).padStart(2, '0');

  return (
    <div id='time-left'>
      <span>{twoDigitTime(minutes)}</span>
      :
      <span>{twoDigitTime(seconds)}</span>
    </div>
  );
}
