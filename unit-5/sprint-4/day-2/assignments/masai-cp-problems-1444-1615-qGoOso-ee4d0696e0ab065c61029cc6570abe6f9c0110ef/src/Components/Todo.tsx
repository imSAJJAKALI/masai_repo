import React, { useState } from "react";
import { obj } from "./Todos";
function Todo({title,description,status}:obj) {
  const [isChecked,setIsChecked]=useState(status)

  


  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{description}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input data-testid="todo-status" type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)} />
    </div>
  );
}

export default Todo;
