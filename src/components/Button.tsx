import React, { PropsWithChildren } from "react";


type ButtonProps = PropsWithChildren<{
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
}>

const Button = ({ children, onClick, size = 'medium', variant = 'primary' }: ButtonProps) => {

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

    return <button data-testid="addButton" className="addButton" style={style} onClick={onClick}>{children}</button>
};

export default Button;
