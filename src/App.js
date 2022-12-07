import { useState } from "react";
import "./App.css";
import TodoList from "./components/toDoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Learn React",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Learn Typescript",
      isCompleted: false,
    },
  ]);
  const data = ["Learn JS", "Learn ReactJS", "Learn Redux"];

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoList data={todos} />
    </div>
  );
}

export default App;
