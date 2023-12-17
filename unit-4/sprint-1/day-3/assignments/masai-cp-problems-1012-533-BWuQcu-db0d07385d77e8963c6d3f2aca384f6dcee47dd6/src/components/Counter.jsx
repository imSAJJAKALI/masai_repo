
import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <>
      <h2 and data-testid = 'counter-header'>Counter</h2>
      <h3 data-testid = 'count'>{count}</h3>

      <br />
      <button data-testid = 'add-btn' onClick={()=>{setCount(count+1)}}>+</button>
      <button data-testid = 'subtract-btn' onClick={()=>{setCount(count-1)}}>-</button>
      <button and data-testid = 'double-btn' onClick={()=>{setCount(count*2)}}>Double</button>
    </>
  )
}

export default Counter