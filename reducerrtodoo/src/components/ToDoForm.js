import React, {useState} from 'react';


export default function ToDoForm({dispatch}){
  const [newTodo, setNewTodo] = useState('');
  const handleChanges = event => {
    setNewTodo(event.target.value);
  }
    const submitForm = event => {
      event.preventDefault();
      dispatch({
        type: 'ADD_TODO',
        payload:newTodo
      })
      setNewTodo('');
    }
    const deleteTodo = event => {
      event.preventDefault();
      dispatch({
        type:'DELETE_TODO',
      })
    }
   return(
     <div>
       <form>
         <label>
           What do I need to do? :
         </label>
         <input 
         type='text'
         value={newTodo}
         onChange={handleChanges}
         
         />
         <button onClick={submitForm}>Add Todo</button>
         <button onClick={deleteTodo}>Delete Todo</button>
       </form>
     </div>
    )
  }
