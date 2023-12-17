import React, { useState } from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import { store } from "../Redux/store";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const Counter = () => {

  let {getState,dispatch,subscribe}=store
  let count=getState().counter
const [numCount,setCount]=useState(count)

subscribe(()=>{
  setCount(count)
})


const handleAdd=()=>{
  dispatch(handleAddActionObj())
 
}

const handleReduce=()=>{
 
  dispatch(handleReduceActionObj())
  
}
  return (

    <div data-testid="counter">
      <h1>Counter Application</h1>
    
        <CounterValue count={numCount} />
        <CounterButtons add={handleAdd} reduce={handleReduce}  />
    
    </div>
  );
};

export default Counter;
