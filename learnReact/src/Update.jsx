import React from 'react';
import { useState } from 'react';

export default function Update() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1
        style={{ border: '2px solid black', width: '50px', background: 'red' }}
      >
        {count}
      </h1>
      <button onClick={handleClick}>count Increment</button>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        count Decrement
      </button>
    </div>
  );
}
