// import "./ToDo.css"
import { useState } from "react";

function ToDo() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    setTodoList([
      ...todoList,
      todoInput,
    ]); /*the ... copies whats inside the todoList then adds the todoInput after the comma */

    todoInput(""); /*resets whats inside the input*/
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
    </div>
  );
}

export default ToDo;
