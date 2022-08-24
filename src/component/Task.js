import React from "react"
import NewTask from "./NewTask";

function Task({ todos, deleteTask, setTodos }) {
  return (
    todos.map((todo) => {
      return (
        <NewTask todo={todo} todos={todos} onDelete={deleteTask} status={todo.status} setTodos={setTodos} key={todo.id} index={todo.id} />
      )
    })
  )

}

export default Task;