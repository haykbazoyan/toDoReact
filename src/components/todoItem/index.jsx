import "./styles.css"

const TodoItem = ({toDoText}) => {
    return (
        <div>
            <label className="label">
                <input type="checkbox" />
                {toDoText}
                <button className="close_button">X</button>
            </label>
        </div>
    )
}

export default TodoItem;