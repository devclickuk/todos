import React from 'react';
import { CiUndo } from 'react-icons/ci';
import { BsCheckLg } from 'react-icons/bs';

type TaskButtonProps = {
    testid: number;
    taskid: string;
    handleToggle: (taskid: string) => void;
    size?: 'small' | 'medium' | 'large';
    completed: boolean;
}

const MarkTaskButton = ({ testid, taskid, handleToggle, completed = false, size = 'medium' }: TaskButtonProps) => {

    const finalSize = size === 'small' ? 16 : size === 'medium' ? 24 : 32;

    return (
        <>
            {completed ? (
                <CiUndo data-testid={`itemUndoIcon-${testid + 1}`} className="itemUndoIcon" size={finalSize} onClick={() => handleToggle(taskid)} />
            ) : (
                <BsCheckLg data-testid={`itemToggleIcon-${testid + 1}`} className="itemToggleIcon" size={finalSize} onClick={() => handleToggle(taskid)} />
            )}
        </>
    )
}

export default MarkTaskButton;