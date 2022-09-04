import React from "react"
import NewTask from "./NewTask";

function Task({ todos, deleteTask, setTodos, userId }) {
  return (
    todos.map((todo) => {
      // if(userId === todo.userfilterid){
      return (
        (userId === todo.userfilterid) ? <NewTask todo={todo} todos={todos} onDelete={deleteTask} status={todo.status} setTodos={setTodos} key={todo.id} index={todo.id} /> : ''
      )
      // }
    })
  )

}

export default Task;