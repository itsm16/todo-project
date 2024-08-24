import React, { useState, useEffect } from "react";
import { TodoContextProvider } from "./contexts/TodoContext";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Task from "./components/Task";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (name) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), name: name.text, completed: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, toggleCompleted }}
    >
      <TodoInput />
      <div>
        {todos.length > 0 ? (
          todos.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}  // Pass the completed prop
            />
          ))
        ) : (
          <p className="text-white">No Todos</p>
        )}
      </div>
    </TodoContextProvider>
  );
}

export default App;
