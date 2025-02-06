import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmptyTasks from '../components/EmptyTasks';
import '../index.css';
import '../styles/todos.css';

const meta: Meta<typeof EmptyTasks> = {
    title: 'Components/EmptyTasks',
    component: EmptyTasks,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof EmptyTasks>;

export const Default: Story = {
    args: {},
};
