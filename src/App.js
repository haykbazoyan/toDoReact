import { useState } from "react";
import "./App.css";
import InputForm from "./components/inputForm";
import TodoFooter from "./components/todoFooter";
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

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <InputForm
        onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            },
          ]);
        }}
      />
      <TodoList data={todos} />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          setTodos(todos.filter((el) => !el.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
