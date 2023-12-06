import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* We can pass variable like that */}
      <Card
        channel="chai aur code"
        help="my self"
        user="mac12"
        btnText="click"
      />
      <Card user="mac-13" />
    </>
  );
}

export default App;
