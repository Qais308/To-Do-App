import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // required

import { useState } from "react";

export default function AddTodo({ onNewItem }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onNewItem(name.trim(), dueDate || null);
    setName("");
    setDueDate(null); // ✅ reset to null, not empty string
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
        <DatePicker
          className="todo-date"
          selected={dueDate}
          onChange={(newDate) => setDueDate(newDate)}
          placeholderText="Select a date"
          dateFormat="dd/MM/yyyy"
          isClearable
        />
      </div>
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}
