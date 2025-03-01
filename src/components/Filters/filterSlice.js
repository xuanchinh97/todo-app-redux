const initState = {
    search: '',
    status: 'All',
    priorities: []
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/priorityFilterChange':
            return {
                ...state,
                priorities: action.payload
            }
        default:
            return state
    }
}

export default filterReducer