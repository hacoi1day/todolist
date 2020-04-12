import * as types from './../actions/types';

const initialState = {
    items: [],
    item: {}
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TASKS:
            return {
                ...state,
                items: action.payload
            };
        case types.NEW_TASK:
            let task = action.payload;
            return {
                ...state,
                items: [...state.items, task]
            };
        case types.DELETE_TASK:
            let items = state.items;
            items = items.filter(item => item.id !== parseInt(action.payload));
            return {
                ...state,
                items
            };
        default:
            return state;
    }
}

export default taskReducer;
