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
          <p className={`counter-text ${actionType}`}>Count: {count}</p>
        </div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
