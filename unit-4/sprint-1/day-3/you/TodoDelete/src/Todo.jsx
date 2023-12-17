import { useState } from "react";

function Todo(){
  const [todo,setTodo]=useState('')
  const [data,setData]=useState([])

  const handleDelete=(i)=>{
   const changeData=data.filter((e,index)=>index!=i)

    setData(changeData)
  }

  return (
    <>
    <input type="text" 
    placeholder='Ener your todo...'
    onChange={(e)=>setTodo(e.target.value)}
    />
    <button
    onClick={()=>setData([...data,todo])}
    >Add</button>
     {data.map((e,i)=><div style={{
       padding:'20px',
       marginTop:'10px',
       display:'flex',
       justifyContent:'space-around',
       border:'1px solid black '
        
       }}>
      <li key={i}>{e}</li>
      <button onClick={()=>handleDelete(i)}>Delete</button>
     </div>)}
    </>
  )
}
export default Todo;