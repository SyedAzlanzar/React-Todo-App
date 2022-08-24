import React from "react";
import { useState,useEffect } from "react";
import "./App.css";
import Task from "./component/Task";
import Form from "./component/Form";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // set items in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTask = (id) => {
    setTodos(todos.filter((todolist) => todolist.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>TODO LIST</h1>

        <div className="main">
          <div className="sub-main">
            <Form
              setInputText={setInputText}
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
            />
            <div className="todos">
              <Task
                deleteTask={deleteTask}
                setTodos={setTodos}
                todos={todos}
              ></Task>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
