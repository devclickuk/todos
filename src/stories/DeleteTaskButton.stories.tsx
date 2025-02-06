import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DeleteTaskButton from '../components/DeleteTaskButton';
import '../index.css';
import '../styles/todos.css';
import { fn } from '@storybook/test';

const meta: Meta<typeof DeleteTaskButton> = {
    title: 'Components/DeleteTaskButton',
    component: DeleteTaskButton,
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        },
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
        }
    },
    args: {
        handleDelete: fn(),
    }
}

export default meta;
type Story = StoryObj<typeof DeleteTaskButton>;

export const Primary: Story = {
    args: {
        handleDelete: fn(),
        size: 'medium',
        variant: 'primary',
    }
}

export const Secondary: Story = {
    args: {
        size: 'medium',
        variant: 'secondary',
    }
}

export const Small: Story = {
    args: {
        size: 'small',
        variant: 'primary',
    }
}

export const Medium: Story = {
    args: {
        size: 'medium',
        variant: 'primary',
    }
}


export const Large: Story = {
    args: {
        size: 'large',
        variant: 'primary',
    }
}




