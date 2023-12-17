import axios from "axios";
import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";

const Todos = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((res)=>setData(res.data))
  },[data])

  return (
    <div style={{textAlign:"center"}} data-testid = "todos-wrapper">
      <TodoInput/>
      {data.map((e)=><div>{`${e.title} - ${e.status}`}</div>)}
    {/* add TodoInput component here */}
    {/* map through the todos array and display the tasks */}
    </div>
  );
};

export default Todos;
