import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const TodoInput = () => {
    const [input,setinput]=useState("")
    const handleAdd=()=>{
        const detas={
            title:input,
            status:false,
        }
        axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,detas)
    }
  return (
    <div>
       <h1> Todo List </h1>
       <input type="text" data-testid = "todo-input" onChange={(e)=>setinput(e.target.value)} placeholder='add todo here..'/> <button data-testid ="add-button" onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default TodoInput