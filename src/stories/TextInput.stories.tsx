import React, { useRef, RefObject } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TextInput from '../components/TextInput';
import '../index.css';
import '../styles/todos.css';


const meta: Meta<typeof TextInput> = {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    argTypes: {
        handleAdd: { action: 'handleAdd' },
    },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
    args: {
        handleAdd: fn(),
        placeholder: 'Add a task',
        size: 'medium',
        variant: 'primary'
    }
};

export const Secondary: Story = {
    args: {
        handleAdd: fn(),
        placeholder: 'Add a task',
        size: 'medium',
        variant: 'secondary'
    }
};

export const Small: Story = {
    args: {
        handleAdd: fn(),
        placeholder: 'Add a task',
        size: 'small',
        variant: 'primary'
    }
};

export const Medium: Story = {
    args: {
        handleAdd: fn(),
        placeholder: 'Add a task',
        size: 'medium',
        variant: 'primary'
    }
};

export const Large: Story = {
    args: {
        handleAdd: fn(),
        placeholder: 'Add a task',
        size: 'large',
        variant: 'primary'
    }
};

