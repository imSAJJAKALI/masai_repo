import React from "react";
import { useSelector } from "react-redux";


// get all the todos from the redux store, and map them inside this component
const TodoList = () => {
  const todosData=useSelector((store)=>store.todos)
  console.log(todosData)
  return (
    <div data-testid='todo-list-wrapper'>

      {/* map all the "individual/single" todo inside this div. */}

      <div data-testid="single-todo" >
         {todosData.map((e)=><h3>{e.title} - {e.status?"True":"False"}</h3>)}
      </div>


    </div>
  );
};

export default TodoList;
