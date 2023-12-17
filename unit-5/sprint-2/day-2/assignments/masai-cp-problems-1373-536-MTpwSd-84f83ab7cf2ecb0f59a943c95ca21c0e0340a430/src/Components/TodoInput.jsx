import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TodoInput = () => {

  const [todo,setTodos]=useState('')
 
  
  const AddTodo=()=>{
    const todoData={
      title:todo,
      status:false,
    }
    todoData.title.length!=0? axios.post(`http://localhost:8080/todos`,todoData):alert('input box empty.......')
   
   
  }
  // useEffect(()=>{
  //   AddTodo()
  // },[])

  return (
    <div>
        <input data-testid = 'todo-input' onChange={(e)=>setTodos(e.target.value)} type="text" />
        <button data-testid ='add-button' onClick={AddTodo} >Add</button>
    </div>
  )
}

export default TodoInput