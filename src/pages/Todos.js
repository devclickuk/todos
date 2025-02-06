import { useRef } from 'react'
import '../styles/todos.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../redux/slices/tasksSlice';
import { RxCross2 } from 'react-icons/rx'
import { BsCheckLg } from 'react-icons/bs'
import { CiUndo } from 'react-icons/ci'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Container from '../components/Container'

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
                    <div key={task.id} className="listItem" data-testid={`listItem-${index + 1}`}>
                        <span data-testid={`itemText-${index + 1}`} className={`itemText ${task.completed ? 'itemComplete' : ''}`}>{task.title}</span>
                        <div className='itemButtonsContainer'>
                            {task.completed ? (
                                <CiUndo data-testid={`itemUndoIcon-${index + 1}`} className="itemUndoIcon" size={24} onClick={() => handleToggle(task.id)} />
                            ) : (
                                <BsCheckLg data-testid={`itemToggleIcon-${index + 1}`} className="itemToggleIcon" size={24} onClick={() => handleToggle(task.id)} />
                            )}
                            <RxCross2 data-testid={`itemDeleteIcon-${index + 1}`} className="itemDeleteIcon" size={24} onClick={() => handleDelete(task.id)} />
                        </div>
                    </div>
                ))}
                {tasks.length === 0 && (
                    <div className='emptyListContainer' data-testid="emptyListContainer">
                        <span className="emptyListText">No Tasks</span>
                    </div>
                )}
            </Container>
            <Container orientation='vertical' testid="addContainer">
                <TextInput handleAdd={handleAdd} textRef={textRef} size='medium' variant='primary' placeholder='Add a task' />
                <Button onClick={handleAdd} size='medium' variant='primary'>Add</Button>
            </Container>
        </div>
    );
}

export default Todos;
