import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';
import '../index.css';
import '../styles/todos.css';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
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
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
        size: 'medium',
        onClick: fn()
    }
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
        size: 'medium',
        onClick: fn()
    }
};

export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'small',
        onClick: fn()
    }
};

export const Medium: Story = {
    args: {
        children: 'Medium Button',
        size: 'medium',
        onClick: fn()
    }
};

export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'large',
        onClick: fn()
    }
};