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
        default:
            return state;
    }
}

export default taskReducer;
