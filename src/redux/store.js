// import { createStore } from 'redux'
// import rootReducer from './reducer'


// const store = createStore(rootReducer)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../components/Filters/filterSlice";
import { todoListSlice } from "../components/TodoList/todoListSlice";

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoListSlice.reducer
    }
})

export default store