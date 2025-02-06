import React from 'react';

type TextInputProps = {
    handleAdd: () => void;
    textRef: React.RefObject<HTMLInputElement> | null;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    placeholder?: string;
}

const TextInput = ({ handleAdd, textRef, placeholder = 'Add a task', size = 'medium', variant = 'primary' }: TextInputProps) => {

    const style = {
        padding: size === 'small' ? 'calc(var(--padding) * 0.5)' :
            size === 'medium' ? 'var(--padding)' :
                'calc(var(--padding) * 1.5)',
        fontSize: size === 'small' ? '1rem' :
            size === 'medium' ? '1.5rem' :
                '2rem',
        backgroundColor: variant === 'primary' ? 'var(--whiteColor)' : 'var(--altBackgroundColor)',
        color: variant === 'primary' ? 'var(--altBackgroundColor)' : 'var(--whiteColor)',
    }


    return (
        <input
            className="addInput"
            style={style}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleAdd()
                }
            }}
            ref={textRef}
            type="text"
            placeholder={placeholder}
            data-testid="addInput"
        />)
}

export default TextInput;