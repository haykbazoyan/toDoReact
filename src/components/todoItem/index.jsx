import "./styles.css"

const TodoItem = ({toDoText}) => {
    return (
        <div>
            <label className="label">
                <input type="checkbox" />
                {toDoText}
                <button>X</button>
            </label>
        </div>
    )
}

export default TodoItem;