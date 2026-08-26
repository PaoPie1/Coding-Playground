import { useState } from "react";
import "./App.css";

import sound from "./assets/pop.wav";

function App() {
  const [count, setCount] = useState(0);

  const [actionType, setActionType] = useState(null);

  const playSound = new Audio(sound);

  const handleAdd = () => {
    setCount(count + 1);
    setActionType("add");
    playSound.play();
  };

  const handleMinus = () => {
    setCount(count - 1);
    setActionType("minus");
    playSound.play();
  };

  const handleReset = () => {
    setCount(0);
    setActionType(null);
    playSound.play();
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
