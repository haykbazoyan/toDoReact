function TodoFooter({todos, onClearCompleted}) {

    const completedItemsLength = todos.filter((el) => el.isCompleted).length
    
    return (
        <div>
            <span>{completedItemsLength}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clean Completed</button>
        </div>
    )
}

export default TodoFooter;