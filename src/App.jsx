import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
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
    { name: itemName, dueDate: itemDueDate }, 
    ...currValue,                             
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

      <div className="app-wrapper">
        <header className="app-header">
          <div className="appName">To-Do App</div>
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
