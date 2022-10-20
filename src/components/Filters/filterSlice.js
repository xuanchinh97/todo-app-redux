// const initState = {
//     search: '',
//     status: 'All',
//     priorities: []
// }

// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priorities: action.payload
//             }
//         default:
//             return state
//     }
// }

// export default filterReducer

import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload
        }
    }
})