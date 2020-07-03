import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  function handler(event) {
    const val = event.target.value;
    setName(val);
  }
  function addItems() {
    setItems(preValues => {
      return [...preValues, name];
    });
    setName("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handler} type="text" value={name} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todolist => (
            <li>{todolist}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
