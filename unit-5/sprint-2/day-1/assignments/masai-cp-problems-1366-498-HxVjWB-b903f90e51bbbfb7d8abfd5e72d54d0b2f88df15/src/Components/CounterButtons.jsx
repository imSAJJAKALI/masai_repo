import React from "react";

const CounterButtons = ({handleAdd,handleReduce}) => {

  
 

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleAdd} >ADD</button>
      <button data-testid="reduceButton" onClick={handleReduce} >REDUCE</button>
    </div>
  );
};

export default CounterButtons;
