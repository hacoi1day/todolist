import * as types from './types';

export const fetchTasks = (tasks) => {
    return {
        type: types.FETCH_TASKS,
        payload: tasks,
    }
}

export const newTask = (task) => {
    return {
        type: types.NEW_TASK,
        payload: task
    }
}