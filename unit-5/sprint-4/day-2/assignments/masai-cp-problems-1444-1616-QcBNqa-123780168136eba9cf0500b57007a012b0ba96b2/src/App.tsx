import React, {  useEffect, useState } from "react";
function App() {
  
 const initialValue=()=>{
  const storedCount=localStorage.getItem('counter');
  return storedCount?parseInt(storedCount,0):0;
 }

  const [count,setCount]=useState<number>(initialValue)

  const handleClick=(num:number)=>{
    setCount((prev)=>prev+num)
  }
  useEffect(()=>{
localStorage.setItem('counter',count.toString())
  },[count])
  
  return (
    <div className="App">
      <h1 data-testid="counter">{count}</h1>
      <button data-testid="increment" onClick={()=>handleClick(1)} >Increment</button>
      <button data-testid="decrement" onClick={()=>handleClick(-1)} >Decrement</button>
      <button data-testid="increment5" onClick={()=>handleClick(5)} >Increment 5 times</button>
      <button data-testid="decrement5" onClick={()=>handleClick(-5)} >Decrement 5 times</button>
    </div>
  );
}

export default App;
