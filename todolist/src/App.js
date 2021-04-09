import './App.css';
import { useState } from 'react';

function App() {
  const addTask = () => {
    const inputText = document.getElementById("input").value
    if (inputText != "") {
      setTasks([...tasks, { desc: inputText, isDone: false }])
    }
  }

  const checkTask = (i) => {
    tasks[i].isDone = !tasks[i].isDone
    setTasks([...tasks])
  }

  const deleteTask = (i) => {
    const filterItems = tasks.filter((item, index) => index != i)
    setTasks([...filterItems])
  }

  const [tasks, setTasks] = useState([
    { desc: "Read a book", isDone: false},
    { desc: "Write a book", isDone: false},
    { desc: "Do hw", isDone: false},
  ])

  const taskItems = tasks.map((item, i) => 
    <div className="task" key={i} >
      <div onClick={() => checkTask(i)} className="checking" style={{ border: item.isDone ? '1px solid pink' : '1px solid white', background: item.isDone ? 'pink' : 'transparent' }}></div>
      <span style={{ textDecoration: item.isDone ? 'line-through' : 'none', color: item.isDone ? 'lightgray' : 'white' }}>{item.desc}</span>
      <button onClick={() => deleteTask(i)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
      </button>
    </div>
  )

  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="add-task">
        <input id="input" placeholder="Add New Task"></input>
        <button onClick={addTask}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
      <div className="task-container">
        {taskItems}
      </div>
    </>
  );
}

export default App;
