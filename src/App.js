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


  return (
    <div className="App">
      <div className="listContainer">
        {todos.map((todo) => (
          <div key={todo.id} className="listItem">
            <span className="itemText">{todo.text}</span>
            <div className="itemDeleteIcon">X</div>
          </div>
        ))}
      </div>
      <div className="addContainer">
        <input
          className="addInput"
          ref={textRef}
          type="text"
        />
        <button className="addButton">Add</button>
      </div>
    </div>
  );
}

export default App;
