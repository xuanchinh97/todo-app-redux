import { createSelector } from 'reselect'

export const searchTextSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritiesSelector = (state) => state.filters.priorities
export const todoListSelector = (state) => state.todoList

export const todoRemainingSelector = createSelector(todoListSelector, filterStatusSelector, searchTextSelector, filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                if (priorities.length > 0) {
                    return todo.name.includes(searchText) && priorities.includes(todo.priority)
                }
                return todo.name.includes(searchText)
            } else if (status === 'Completed') {
                if (priorities.length > 0) {
                    return todo.name.includes(searchText) && todo.completed && priorities.includes(todo.priority)
                }
                return todo.name.includes(searchText) && todo.completed
            } else {
                if (priorities.length > 0) {
                    return todo.name.includes(searchText) && !todo.completed && priorities.includes(todo.priority)
                }
                return todo.name.includes(searchText) && !todo.completed
            }
        })
    })