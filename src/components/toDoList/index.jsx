import "./styles.css";
import TodoItem from "../todoItem";

const TodoList = ({data}) => {
    return (
        <div className="non_styles">
            {data.map((todo) => {
                return (
                    <div className="todo_item">
                        <TodoItem key={todo.key} toDoText={todo.text} />
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;