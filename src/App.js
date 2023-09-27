import { useRef } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from './redux/slices/tasksSlice';
import { RxCross2 } from 'react-icons/rx'
import { BsCheckLg } from 'react-icons/bs'
import { CiUndo } from 'react-icons/ci'

function App() {
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
      <div className="listContainer">
        {tasks.map((task) => (
          <div key={task.id} className="listItem">
            <span className={`itemText ${task.completed ? 'itemComplete' : ''}`}>{task.title}</span>
            <div className='itemButtonsContainer'>
              {task.completed ? (
                <CiUndo className="itemUndoIcon" size={24} onClick={() => handleToggle(task.id)} />
              ) : (
                <BsCheckLg className="itemToggleIcon" size={24} onClick={() => handleToggle(task.id)} />
              )}
              <RxCross2 className="itemDeleteIcon" size={24} onClick={() => handleDelete(task.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="addContainer">
        <input
          className="addInput"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAdd()
            }
          }}
          ref={textRef}
          type="text"
        />
        <button className="addButton" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default App;
