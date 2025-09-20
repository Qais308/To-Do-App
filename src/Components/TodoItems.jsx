// import { motion, AnimatePresence } from "framer-motion";

// export default function TodoItems({ todoItems, onDeleteClick }) {
//   return (
//     <div className="todo-items">
//       <AnimatePresence>
//         {todoItems.map((item) => (
//           <motion.div
//             className="todo-row"
//             key={item.name} // ⚠️ ideally use a unique id
//             initial={{ opacity: 0, y: -20 }}   // start slightly above
//             animate={{ opacity: 1, y: 0 }}     // settle in place
//             exit={{ opacity: 0, y: -20 }}      // slide back up on delete
//             transition={{ duration: 0.35, ease: "easeInOut" }} // smooth animation
//           >
//             <div className="todo-left">
//               <div className="todo-name">{item.name}</div>
//               <div className="todo-due">
//                 {item.dueDate
//                   ? new Date(item.dueDate).toLocaleDateString()
//                   : "-"}
//               </div>
//             </div>
//             <button
//               className="delete-btn"
//               onClick={() => onDeleteClick(item.name)}
//             >
//               Delete
//             </button>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }
import { Reorder, motion } from "framer-motion";

export default function TodoItems({ todoItems, setTodoItems, onDeleteClick }) {
  return (
    <Reorder.Group
      axis="y"
      values={todoItems}
      onReorder={setTodoItems} // updates order in state
      className="todo-items"
    >
      {todoItems.map((item) => (
        <Reorder.Item
          key={item.name}
          value={item}
          className="todo-row"
          whileDrag={{ scale: 1.05 }}
        >
          <motion.div
            className="todo-left"
            layout // smooth animations on reorder
          >
            <div className="todo-name">{item.name}</div>
            <div className="todo-due">
              {item.dueDate
                ? new Date(item.dueDate).toLocaleDateString()
                : "-"}
            </div>
          </motion.div>
          <button
            className="delete-btn"
            onClick={() => onDeleteClick(item.name)}
          >
            Delete
          </button>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

