import "./styles.css";
import TodoItem from "../todoItem";

const TodoList = ({data, onChange, onDelete}) => {
  return (
    <div className="non_styles">
      {data.length === 0 ? <div>Add your target</div> : data.map((todo) => {
        return (
          <div className="todo_item">
            <TodoItem
              key={todo.key}
              todo={todo}
              onChange={onChange}
              onDelete={onDelete}
            />
          </div>
        )
      })}
    </div>
  )
}

export default TodoList;