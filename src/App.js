import React from "react"
import { useState } from 'react';
import './App.css';
import Task from './component/Task';
import Form from "./component/Form";

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])



  const deleteTask = (id) => {
    setTodos(todos.filter((todolist) => todolist.id !== id))

  }
  return (
    <div className="App">
      <div className="container">
        <h1>TODO LIST</h1>
        <div className='main'>
          <div className="sub-main">
            <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} />
            <div className='todos'>
              <Task deleteTask={deleteTask} setTodos={setTodos} todos={todos}></Task>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
