export default function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="todo-items">
      {todoItems.map((item, index) => (
        <div className="todo-row" key={index}>
          <div className="todo-left">
            <div className="todo-name">{item.name}</div>
            <div className="todo-due">
              {item.dueDate
                ? new Date(item.dueDate).toLocaleDateString()
                : "-"}
            </div>
          </div>
          <button
            className="delete-btn"
            onClick={() => onDeleteClick(item.name)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
