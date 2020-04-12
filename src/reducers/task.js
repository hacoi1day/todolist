import * as types from './../actions/types';

const initialState = {
    items: [],
    item: {}
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TASKS:
            console.log('fetch tasks');
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}

export default taskReducer;
