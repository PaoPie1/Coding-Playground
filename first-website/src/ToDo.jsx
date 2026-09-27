// import "./ToDo.css"
import { useState } from "react";

// passes on "onLogout" from app.jsx
function ToDo({ onLogout }) {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    setTodoList([
      ...todoList,
      todoInput,
    ]); /*the ... copies whats inside the todoList then adds the todoInput after the comma */

    setTodoInput(""); /*resets whats inside the input*/
  };

  return (
    <div className="todo-container">
      <header>
        <h2>ToDo List</h2>
      </header>

      <form className="todo-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add task..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
        <button type="submit">ADD</button>
      </form>

      {/* list to show the todo tasks */}
      <ul className="todo-list">
        {todoList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      {/* logout button to go back to login form */}
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
}

export default ToDo;
