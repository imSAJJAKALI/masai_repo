import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    const handleAdd =()=>{
   setCount((prev)=>prev+1)
    }
  return (
    <div>
        <h2 data-testid='count'>Count : {count}</h2>
        <button data-testid='add' onClick={handleAdd} >Add</button>
    </div>
  )
}

export default Counter