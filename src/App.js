import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const textRef = useRef()

  useEffect(() => {
    setTodos([
      {
        id: uuidv4(),
        text: 'Buy milk',
        complete: false
      },
      {
        id: uuidv4(),
        text: 'Buy eggs',
        complete: false
      },
      {
        id: uuidv4(),
        text: 'Buy bread',
        complete: false
      },
    ])
  }, [])

  const handleAdd = () => {
    console.log('handle add clicked')
    const id = uuidv4()
    setTodos([...todos, { id: id, text: textRef.current.value }])
    resetTextValue()
  }

  const resetTextValue = () => {
    textRef.current.value = ''
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <div className="listContainer">
        {todos.map((todo) => (
          <div key={todo.id} className="listItem">
            <span className="itemText">{todo.text}</span>
            <div className="itemDeleteIcon" onClick={() => handleDelete(todo.id)}>X</div>
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
