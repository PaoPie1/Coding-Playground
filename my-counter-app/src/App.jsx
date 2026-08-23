import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
