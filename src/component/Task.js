import React from "react"
import NewTask from "./NewTask";

function Task({ todos, deleteTask, setTodos }) {
  return (
    todos.map((todos) => {
      return (
        <NewTask  onDelete={deleteTask} status={todos.status} title={todos.title} key={todos.id} index={todos.id} />
      )
    })
  )

}

export default Task;