import { motion, AnimatePresence } from "framer-motion";

export default function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="todo-items">
      <AnimatePresence>
        {todoItems.map((item) => (
          <motion.div
            className="todo-row"
            key={item.name} 
            initial={{ opacity: 0, y: -20 }}  
            animate={{ opacity: 1, y: 0 }}     
            exit={{ opacity: 0, y: -20 }}     
            transition={{ duration: 0.35, ease: "easeInOut" }} 
          >
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
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}


