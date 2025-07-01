import { useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) return;
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setCount(0);
    setIsRunning(false);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop} disabled={!isRunning}>Pause</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
