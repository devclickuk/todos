import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        {
            id: uuidv4(),
            title: 'Buy milk',
            completed: false,
            order: 1,
        },
        {
            id: uuidv4(),
            title: 'Buy eggs',
            completed: false,
            order: 2,
        },
        {
            id: uuidv4(),
            title: 'Buy bread',
            completed: false,
            order: 3,
        },
    ],
    reducers: {
        addTask: (state, action) => {

            let orderNum = 0;
            state.map((task) => {
                if (task.order > orderNum) {
                    orderNum = task.order;
                }
                return task;
            })

            const newTask = {
                id: uuidv4(),
                title: action.payload.title,
                completed: false,
                order: orderNum + 1,
            };
            const completedTasks = state.filter((task) => task.completed);
            completedTasks.push(newTask);
            const incompleteTasks = state.filter((task) => !task.completed);
            state.length = 0;

            incompleteTasks.sort((a, b) => a.order - b.order);
            completedTasks.sort((a, b) => a.order - b.order);

            incompleteTasks.forEach((task) => state.push(task));
            completedTasks.forEach((task) => state.push(task));

        },
        toggleTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
            const completedTasks = state.filter((task) => task.completed);
            const incompleteTasks = state.filter((task) => !task.completed);
            state.length = 0;

            incompleteTasks.sort((a, b) => a.order - b.order);
            completedTasks.sort((a, b) => a.order - b.order);

            incompleteTasks.forEach((task) => state.push(task));
            completedTasks.forEach((task) => state.push(task));

        },
        deleteTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            const completedTasks = state.filter((task) => task.completed);
            const incompleteTasks = state.filter((task) => !task.completed);
            state.length = 0;

            incompleteTasks.sort((a, b) => a.order - b.order);
            completedTasks.sort((a, b) => a.order - b.order);

            incompleteTasks.forEach((task) => state.push(task));
            completedTasks.forEach((task) => state.push(task));
        },
    },
});

export const selectTasks = (state) => state.tasks;

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
