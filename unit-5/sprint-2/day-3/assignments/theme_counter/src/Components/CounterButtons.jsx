import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispatch=useDispatch()

  const AddBtn=()=>{
    dispatch(handleAdd(1))
  }
  const ReduceBtn=()=>{
    dispatch(handleReduce(1))
  }

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={AddBtn} >ADD</button>
      <button data-testid="reduceButton" onClick={ReduceBtn}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
