import React,{useEffect} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";
import { useDispatch } from "react-redux"
import { getTodoError, getTodoRequest, getTodoSuccess } from "../Redux/action";


// just write the fetch/get the todos logic when the component mounts, in this component
const Todo = () => {
  const dispatch=useDispatch()
  const getTodos=()=>{
    dispatch(getTodoRequest())
    axios.get('http://localhost:8080/todos')
    .then((res)=>dispatch(getTodoSuccess(res.data)))
    .catch(()=>{
      dispatch(getTodoError())
    })
  }
  useEffect(()=>{
    getTodos()
  },[])

  return (
    <div>
      <h1>Todos</h1>
      {/* Import TodoInput component here */}
      <TodoInput/>

      <TodoList/>

      {/* Import TodoList component here */}
    </div>
  );
};

export default Todo;
