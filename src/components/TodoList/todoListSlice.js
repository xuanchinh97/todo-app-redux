const initState =
    [
        {
            id: 1,
            name: "learn redux",
            completed: true,
            priority: "High"
        },
        {
            id: 2,
            name: "learn redux saga",
            completed: false,
            priority: "Medium"
        },
    ]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}

export default todoListReducer