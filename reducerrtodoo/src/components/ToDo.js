import React from 'react';


export default function Todo({todo,dispatch}){
const completedTodo = event => {
  dispatch({
    type: 'TODO_COMPLETE',
    payload:todo.id
  })
}

  return(
    <div
    onClick={completedTodo}
    style={{textDecoration: todo.completed ? 'line-through' : ''}}> 
    <p>{todo.item}</p>
    </div>
  )
}