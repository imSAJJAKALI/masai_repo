import React from "react";

const CounterButtons = ({add,reduce}) => {
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={add}>ADD</button>
      <button data-testid="reduceButton" onClick={reduce}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
