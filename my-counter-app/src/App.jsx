import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [actionType, setActionType] = useState(null);

  const handleAdd = () => {
    setCount(count + 1);
    setActionType("add");
  };

  const handleMinus = () => {
    setCount(count - 1);
    setActionType("minus");
  };

  const handleReset = () => {
    setCount(0);
    setActionType(null);
  };

  return (
    <>
      <div>
        <h1>My Counter App</h1>
        <div>
          <p>Count: {count}</p>
        </div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Minus
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
