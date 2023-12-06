import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [length, setLength] = useState(8);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center m-3">Password Generator</h1>
        <div className="flex rounded-lg shadow-sm">
          <input
            type="text"
            value={password}
            id="hs-trailing-button-add-on"
            name="hs-trailing-button-add-on"
            className="py-4  px-4 mb-4 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="password"
          />
          <button className="bg-green-700 hover:bg-green-600-600 text-white font-bold py-2 px-4 rounded">
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
