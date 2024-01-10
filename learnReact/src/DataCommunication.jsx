import React, { useState } from 'react';

export default function DataCommunication() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      {/* Pass appropriate props to the second MyButton */}
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
