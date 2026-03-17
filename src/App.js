import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTask(){
   if(inputValue.trim() === "") return;

    const newTask = {
    id: Date.now(),
    text: inputValue,
    completed: false
   };

   setTasks([...tasks, newTask])

    setInputValue("");

  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
  setTasks(tasks.map(task =>
    task.id === id ? {...task, completed: !task.completed} : task
  ));
  }

  const remaining = tasks.filter(task => !task.completed).length;




  return (
    <div id = "app">
      <div id = "card">
        <h1> Your To Do</h1>

        <div id = "inputContainer">
          <input type = "text" placeholder = "Add new task"  id = "search" value = {inputValue} onChange = {(e) =>setInputValue(e.target.value)} />
          <button id = "addBtn" onClick = {addTask}>+</button>
        </div>

        <ul id = "taskList">
          {tasks.map(task =>
          <li key = {task.id} className = {`task ${task.completed ? "completed" : ""}`}>
            <input type = "checkBox" checked = {task.completed} onChange = {() =>toggleTask(task.id)}/>
            <span style = {{textDecoration: task.completed ? "line-through" : "none"}}>{task.text}</span>
            <button className = "deleteBtn" onClick = {() => deleteTask(task.id)} >x</button>
          </li>
        )}
        </ul>

        <p id = "remaining">Your remaining todos: {remaining}</p>
        <p id = "quote">"And still, I rise.” - Maya Angelou</p>
      </div>
    </div>
  )
}

export default App;