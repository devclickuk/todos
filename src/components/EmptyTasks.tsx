import React from 'react';
import Container from './Container';
type EmptyTasksProps = {
    message: string;
    variant?: 'primary' | 'secondary';
}

const EmptyTasks = ({ message = 'No Tasks', variant = 'primary' }: EmptyTasksProps) => {

    const styles = {
        color: variant === 'primary' ? 'var(--altBackgroundColor)' : 'var(--whiteColor)',
    }

    return (
        <Container orientation='vertical' testid="listContainer">
            <div className='emptyListContainer' data-testid="emptyListContainer">
                <span className="emptyListText" style={styles}>{message}</span>
            </div>
        </Container>
    )
}

export default EmptyTasks;