import React from "react";

const CounterValue = ({count}) => {
  console.log(count)
  const counter = count; //get the counter value from the Redux store
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
