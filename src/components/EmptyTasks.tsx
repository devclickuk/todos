import React from 'react';

const EmptyTasks = () => {
    return (
        <div className='emptyListContainer' data-testid="emptyListContainer">
            <span className="emptyListText">No Tasks</span>
        </div>
    )
}

export default EmptyTasks;