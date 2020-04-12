import * as types from './types';

export const fetchTasks = (tasks) => {
    return {
        type: types.FETCH_TASKS,
        payload: tasks,
    }
}