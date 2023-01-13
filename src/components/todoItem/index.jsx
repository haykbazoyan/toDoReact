import "./styles.css"

const TodoItem = ({todo, onChange, onDelete}) => {
  return (
    <div>
      <label className="label">
        <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
          onChange({
            ...todo,
            isCompleted: e.target.checked
          })
        }} />
        {todo.text}
        <button
          className="close_button"
          onClick={() => {
              onDelete(todo);
          }}
        >
          X
        </button>
      </label>
    </div>
  )
}

export default TodoItem;