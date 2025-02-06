import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MarkTaskButton from '../components/MarkTaskButton';
import '../index.css';
import '../styles/todos.css';
import { fn } from '@storybook/test';

const meta: Meta<typeof MarkTaskButton> = {
    title: 'Components/MarkTaskButton',
    component: MarkTaskButton,
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        },
        completed: {
            control: { type: 'boolean' }
        },
        testid: {
            disable: true
        },
        taskid: {
            disable: true
        },
    },
    args: {
        handleToggle: fn(),
        taskid: 'task-1',
        testid: 1,

    }
}

export default meta;
type Story = StoryObj<typeof MarkTaskButton>;

export const Incomplete: Story = {
    args: {
        size: 'medium',
        completed: false,
    }
}

export const Completed: Story = {
    args: {
        size: 'medium',
        completed: true,
    }
}

export const Small: Story = {
    args: {
        size: 'small',
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
    }
}

export const Large: Story = {
    args: {
        size: 'large',
    }
}

