import React from 'react';
import MarkTaskButton from './MarkTaskButton';
import DeleteTaskButton from './DeleteTaskButton';

type TaskContainerProps = {
    taskid: string;
    index: number;
    completed: boolean;
    title: string;
    handleToggle: (taskid: string) => void;
    handleDelete: (taskid: string) => void;
}

const TaskContainer = ({ taskid, index, handleToggle, handleDelete, completed, title }: TaskContainerProps) => {
    return (
        <div className="listItem" data-testid={`listItem-${index + 1}`}>
            <span data-testid={`itemText-${index + 1}`} className={`itemText ${completed ? 'itemComplete' : ''}`}>{title}</span>
            <div className='itemButtonsContainer'>
                <MarkTaskButton testid={index} taskid={taskid} handleToggle={handleToggle} completed={completed} />
                <DeleteTaskButton testid={index} handleDelete={() => handleDelete(taskid)} />
            </div>
        </div>
    )
}

export default TaskContainer;