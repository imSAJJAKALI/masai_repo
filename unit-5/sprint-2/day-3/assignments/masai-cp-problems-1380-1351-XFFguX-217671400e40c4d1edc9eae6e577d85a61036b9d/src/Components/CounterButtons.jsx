import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  function add(val) {
    dispatch(handleAdd(val));
  }
  function rem(val) {
    dispatch(handleReduce(val));
  }
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={() => add(1)}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={() => rem(1)}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
