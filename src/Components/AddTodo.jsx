import { useState } from "react";

export default function AddTodo({ onNewItem }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onNewItem(name.trim(), dueDate || null);
    setName("");
    setDueDate("");
  };

  return (
    <form className="add-todo-form" onSubmit={submitHandler}>
      <div className="inputs-group">
        <input
          className="todo-input"
          type="text"
          placeholder="Enter task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="todo-date"
          type="date"
          placeholder="Enter date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}