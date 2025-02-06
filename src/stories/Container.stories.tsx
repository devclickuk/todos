import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Container from '../components/Container';
import '../index.css';
import '../styles/todos.css';

import Button from '../components/Button';
import TextInput from '../components/TextInput';


const Children = ({ size }: { size: 'small' | 'medium' | 'large' }) => {
    const handleAdd = fn()
    return (
        <>
            <TextInput handleAdd={handleAdd} textRef={null} size={size} variant='primary' placeholder='Add a task' />
            <Button onClick={handleAdd} size={size} variant='primary'>Add</Button>
        </>
    )
}

const meta: Meta<typeof Container> = {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' }
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Primary: Story = {
    args: {
        children: <Children size='medium' />,
        variant: 'primary',
        size: 'medium',
        orientation: 'horizontal'
    }
};

export const Secondary: Story = {
    args: {
        children: <Children size='medium' />,
        variant: 'secondary',
        size: 'medium',
        orientation: 'horizontal'
    }
};

export const Vertical: Story = {
    args: {
        children: <Children size='medium' />,
        variant: 'primary',
        orientation: 'vertical'
    }
};

export const Horizontal: Story = {
    args: {
        children: <Children size='medium' />,
        variant: 'primary',
        orientation: 'horizontal'
    }
};

export const Small: Story = {
    args: {
        children: <Children size='small' />,
        variant: 'primary',
        size: 'small'
    }
};

export const Medium: Story = {
    args: {
        children: <Children size='medium' />,
        variant: 'primary',
        size: 'medium'
    }
};

export const Large: Story = {
    args: {
        children: <Children size='large' />,
        variant: 'primary',
        size: 'large'
    }
};
