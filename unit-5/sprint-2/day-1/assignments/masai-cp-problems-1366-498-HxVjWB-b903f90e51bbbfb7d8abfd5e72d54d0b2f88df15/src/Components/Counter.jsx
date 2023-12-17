import React, { useState } from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import { store } from "../Redux/store";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const Counter = () => {
 
  const {getState,dispatch,subscribe}=store;
  const [count,setCount]=useState(getState().counter)
 
 
 subscribe(()=>{
  setCount(getState().counter)
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
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
          <CounterValue count={count} />
          <CounterButtons handleAdd={handleAdd} handleReduce={handleReduce} />
        
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
