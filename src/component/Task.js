import React from "react"
import NewTask from "./NewTask";

function Task({ todos, deleteTask, editTask }) {
  return (
    todos.map((todos) => {
      return (
        <NewTask onEdit={editTask} onDelete={deleteTask} title={todos.title} key={todos.id} index={todos.id} />
      )
    })
  )

}

export default Task;