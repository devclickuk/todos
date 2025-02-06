import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TaskContainer from '../components/TaskContainer';
import '../index.css';
import '../styles/todos.css';


const meta: Meta<typeof TaskContainer> = {
    title: 'Components/TaskContainer',
    component: TaskContainer,
    tags: ['autodocs'],
    args: {
        handleToggle: fn(),
        handleDelete: fn(),
    }
}

export default meta;

type Story = StoryObj<typeof TaskContainer>;

export const Default: Story = {
    args: {
        taskid: 'task-1',
        title: 'Task 1',
        completed: false,
    }
}

export const Completed: Story = {
    args: {
        taskid: 'task-1',
        title: 'Task 1',
        completed: true,
    }
}

