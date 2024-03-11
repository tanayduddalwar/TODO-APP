import { useState } from 'react';
import './App.css';

function App() {
  const [todoName, setTodoName] = useState(""); // state or storage
  const [todoList, setTodoList] = useState([]);

  function addtoTodoList(event) {
    event.preventDefault();
    console.log("Adding");
    console.log(todoList);
    setTodoList([...todoList, todoName]);
    setTodoName(""); // Reset the input field after adding todo
  }

  return (
    <>
      <div className="todo-container">
        <form onSubmit={addtoTodoList}>
          <label className="todo-label">ADD YOUR TODO</label>
          <input
            type="text"
            className="todo-input"
            value={todoName}
            onChange={(event) => setTodoName(event.target.value)}
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>

        <div className="todo-header">TODO LIST</div>

        <ul className="todo-list">
          {todoList.map((todo, index) => (
            <li key={index} className="todo-item">
              <label>{todo}</label>
              <button
                className="delete-button"
                onClick={() => {
                  const updatedList = todoList.filter((item, i) => i !== index);
                  setTodoList(updatedList);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
