import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(10);

  useEffect(() => {
    console.log("counter = ", counter);
  }, [counter]);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={"./logo.svg"} className="App-logo" alt="logo" />
        counter = {counter}
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </header>
    </div>
  );
};

export default App;
