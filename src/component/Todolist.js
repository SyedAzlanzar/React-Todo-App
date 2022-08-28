import React from 'react'
import { Link, useNavigate } from "react-router-dom"

import { useState, useEffect } from "react";

import Task from './Task'
import Form from "./Form"

function Todolist() {
    let navigate = useNavigate()
    const getLocalStorageItems = () => {
        let listoftodos = localStorage.getItem("todos");
        if (listoftodos) {
            return JSON.parse(localStorage.getItem("todos"));
        } else {
            return [];
        }
    };

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState(getLocalStorageItems());

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
                <div className='logout-btn'>  <button onClick={() => {
                    navigate("/Signin/Signin")
                }} >logout</button></div>

                <div className='todolist-container'>
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
        </div>
    )
}

export default Todolist