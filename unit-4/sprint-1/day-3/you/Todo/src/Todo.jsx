import { useState } from "react";

function Todo(){
  const [todo,setTodo]=useState('')
  const [data,setData]=useState([])


  return (
    <>
    <input type="text" 
    placeholder='Ener your todo...'
    onChange={(e)=>setTodo(e.target.value)}
    />
    <button
    onClick={()=>setData([...data,todo])}
    >Add</button>
     {data.map((e,i)=><li key={i}>{e}</li>)}
    </>
  )
}
export default Todo;