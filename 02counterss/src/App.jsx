import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // useState  use to change state in UI
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log('counted: ' + counter);
  };

  const downValue = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
      console.log('counted: ' + counter);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={downValue}>Down value</button>
    </>
  );
}

export default App;
