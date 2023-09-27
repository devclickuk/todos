import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        {
            id: uuidv4(),
            title: 'Buy milk',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Buy eggs',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Buy bread',
            completed: false,
        },
    ],
    reducers: {
        addTask: (state, action) => {
            console.log('adding new task')
            const newTask = {
                id: uuidv4(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTask);
        },
        toggleTask: (state, action) => {
            console.log('toggling task')
            const task = state.find((task) => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            console.log('deleting task')
            const index = state.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const selectTasks = (state) => state.tasks;

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;