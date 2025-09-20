// import { useState, useEffect } from "react";
// import AppName from "./components/AppName";
// import AddTodo from "./Components/AddTodo";
// import TodoItems from "./Components/TodoItems";
// import WelcomeMessage from "./Components/WelcomeMsg";
// import "./App.css";

// function App() {
//   const [todoItems, setTodoItems] = useState(() => {
//     return JSON.parse(localStorage.getItem("todoItems")) || [];
//   });

//   useEffect(() => {
//     localStorage.setItem("todoItems", JSON.stringify(todoItems));
//   }, [todoItems]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       { name: itemName, dueDate: itemDueDate },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter(
//       (item) => item.name !== todoItemName
//     );
//     setTodoItems(newTodoItems);
//   };

//   const handleClearAll = () => {
//     setTodoItems([]);
//     localStorage.removeItem("todoItems");
//   };

//   return (
//     <div className="app-wrapper">
//       <header className="app-header">
//         <AppName />
//       </header>

//       <main className="app-main">
//         <AddTodo onNewItem={handleNewItem} />

//         {todoItems.length === 0 ? (
//           <WelcomeMessage />
//         ) : (
//           <>
//             <TodoItems
//               todoItems={todoItems}
//               onDeleteClick={handleDeleteItem}
//             />
//             <button className="clear-btn" onClick={handleClearAll}>
//               Clear All
//             </button>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import AppName from "./components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMsg";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState(() => {
    return JSON.parse(localStorage.getItem("todoItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    setTodoItems(todoItems.filter((item) => item.name !== todoItemName));
  };

  const handleClearAll = () => {
    setTodoItems([]);
    localStorage.removeItem("todoItems");
  };

  return (
    <>
      {/* Particles covering the entire body */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#ccccff", "#aabbff"] },
            shape: { type: "circle" },
            opacity: { value: 0.15, random: true },
            size: { value: 4, random: { enable: true, minimumValue: 2 } },
            links: {
              enable: true,
              distance: 150,
              color: "#bbbbff",
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* App content */}
      <div className="app-wrapper">
        <header className="app-header">
          <AppName />
        </header>

        <main className="app-main">
          <AddTodo onNewItem={handleNewItem} />

          {todoItems.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <>
              <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
              <button className="clear-btn" onClick={handleClearAll}>
                Clear All
              </button>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
