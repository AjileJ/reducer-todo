import React, {useReducer} from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import {reducer, initialState} from '../reducers/Reducer'

    function ToDoList(){
  const [state,dispatch] = useReducer(reducer,initialState);
  return(
    <div>
      {state.map(todo => {
        return <ToDo todo={todo} key={todo.id} dispatch={dispatch}/>
      })}
      <ToDoForm dispatch={dispatch}/>
    </div>
  )
}
export default ToDoList;