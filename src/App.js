import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/slices/tasksSlice';

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)
  const textRef = useRef()

  console.log('tasks', tasks)

  const handleAdd = () => {
    console.log('handle add clicked')
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

  return (
    <div className="App">
      <div className="listContainer">
        {tasks.map((task) => (
          <div key={task.id} className="listItem">
            <span className="itemText">{task.title}</span>
            <div className="itemDeleteIcon" onClick={() => handleDelete(task.id)}>X</div>
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
