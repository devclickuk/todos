import React, { PropsWithChildren } from 'react'

type props = PropsWithChildren<{
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    orientation?: 'horizontal' | 'vertical';
    testid?: string;
}>

const Container = ({ children, variant = 'primary', size = 'medium', orientation = 'horizontal', testid }: props) => {

    const style = {
        flexDirection: orientation === 'horizontal' ? 'row' as const : 'column' as const,
        justifyContent: orientation === 'horizontal' ? 'space-between' as const : 'center' as const,
        backgroundColor: variant === 'primary' ? 'var(--cardBackgroundColor)' : 'var(--altBackgroundColor)',
        gap: size === 'small' ? 'calc(var(--margin) / 2)' : size === 'medium' ? 'var(--margin)' : 'calc(var(--margin) * 2)',
    }


    return <div className="container" style={style} data-testid={testid}>{children}</div>
}

export default Container;