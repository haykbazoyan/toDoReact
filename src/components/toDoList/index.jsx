import "./styles.css";
import TodoItem from "../todoItem";

const TodoList = ({data, onChange, onDelete}) => {
    return (
        <div className="non_styles">
            {data.map((todo) => {
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