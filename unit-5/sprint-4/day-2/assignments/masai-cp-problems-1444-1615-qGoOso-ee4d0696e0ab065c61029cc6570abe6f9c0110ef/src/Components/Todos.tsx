import React from "react";
import Todo from "./Todo";

export type obj={
  title:string;
  description:string;
  status:boolean;
}

function Todos() {
  const todos = localStorage.getItem("todos");
    const parsedTodos = todos ? JSON.parse(todos) : [];
    console.log(parsedTodos)
  return <div>
    {parsedTodos.map((e:obj,i:number)=><Todo key={i} {...e} />)}
  </div>;
}

export default Todos;
