import { useState } from "react";
import "./App.css";
import InputForm from "./components/inputForm";
import TodoFooter from "./components/todoFooter";
import TodoList from "./components/toDoList";

function App() {
  const [todos, setTodos] = useState([]);

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
      <TodoList
        data={todos}
        onChange={(newTodo) => {
          setTodos(
            todos.map((el) => {
              if (el.id === newTodo.id) {
                return newTodo;
              }
              return el;
            })
          );
        }}
        onDelete={(todo) => {
          setTodos(todos.filter((el) => el.id !== todo.id));
        }}
      />
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
