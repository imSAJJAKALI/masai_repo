import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

  

  return (
    <div>
        <h2 data-testid = "counter-header"  >Counter</h2>
        <h3 data-testid = "count"  >{count}</h3>
        <button data-testid = "add-btn" onClick={()=>setCount(count+1)} >+</button>
        <button data-testid = "subtract-btn" onClick={()=>setCount(count-1)} >-</button>
        <button data-testid = "double-btn" onClick={()=>setCount(count*2)}>Double</button>
    </div>
  )
}

export default Counter