import React, { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd=()=>{
    setCount(count+1)
  }
  const handleReduce=()=>{
    setCount(count-1)
  }

  return (
    <div data-testid="counter-app">
      <h1 data-testid="counter-display">Counter: {count}</h1>
      <Button data-testid="add-button" name="Add" onClick={handleAdd} />
      <Button data-testid="reduce-button" name="Reduce" onClick={handleReduce} />
    </div>
  );
};
