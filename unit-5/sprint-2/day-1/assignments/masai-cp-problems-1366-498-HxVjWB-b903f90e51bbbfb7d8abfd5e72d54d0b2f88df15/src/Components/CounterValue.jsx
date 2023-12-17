import React from "react";

const CounterValue = ({count}) => {
 
  //get the counter value from the Redux store
  return <div data-testid="counterValue">{count}</div>;
};

export default CounterValue;
