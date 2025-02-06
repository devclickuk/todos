import React from 'react';
import { RxCross2 } from 'react-icons/rx';

type TaskButtonProps = {
    testid: number;
    handleDelete: () => void;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
}

const DeleteTaskButton = ({ testid, handleDelete, size = 'medium', variant = 'primary' }: TaskButtonProps) => {

    const styles = {
        color: variant === 'primary' ? 'var(--altColor)' : 'var(--altBackgroundColor)',
    }

    const finalSize = size === 'small' ? 16 : size === 'medium' ? 24 : 32;

    return (
        <RxCross2 data-testid={`itemDeleteIcon-${testid + 1}`} className="itemDeleteIcon" style={styles} size={finalSize} onClick={handleDelete} />
    )
}

export default DeleteTaskButton;