import { useRef } from 'react'
import '../styles/todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../redux/slices/tasksSlice';

import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Container from '../components/Container'
import TaskContainer from '../components/TaskContainer'
import EmptyTasks from '../components/EmptyTasks'
function Todos() {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    const textRef = useRef()

    const handleAdd = () => {
        const text = textRef.current.value
        if (text === '') {
            return
        }
        dispatch(addTask({ title: text }))
        resetTextValue()
    }

    const resetTextValue = () => {
        textRef.current.value = ''
    }

    const handleDelete = (id) => {
        dispatch(deleteTask({ id }))
    }

    const handleToggle = (id) => {
        console.log(id)
        dispatch(toggleTask({ id }))
    }

    return (
        <div className="App">
            <Container orientation='vertical' testid="listContainer">
                {tasks.map((task, index) => (
                    <TaskContainer
                        key={task.id}
                        taskid={task.id}
                        index={index}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                        completed={task.completed}
                        title={task.title}
                    />
                ))}
                {tasks.length === 0 && (
                    <EmptyTasks />
                )}
            </Container>
            <Container orientation='horizontal' testid="addContainer">
                <TextInput handleAdd={handleAdd} textRef={textRef} size='medium' variant='primary' placeholder='Add a task' />
                <Button onClick={handleAdd} size='medium' variant='primary'>Add</Button>
            </Container>
        </div>
    );
}

export default Todos;
