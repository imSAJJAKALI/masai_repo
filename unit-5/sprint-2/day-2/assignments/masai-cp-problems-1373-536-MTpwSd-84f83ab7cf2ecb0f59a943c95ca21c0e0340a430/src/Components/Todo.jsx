import axios from "axios";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { todoActionFailure, todoActionRequest, todoActionSuccess } from "../Redux/action";
import { useEffect } from "react";
import { GET_TODO_SUCCESS } from "../Redux/actionType";


const Todos = () => {
  const data=useSelector((store)=>store)
  const dispatch=useDispatch()
  
  const getTodo=()=>{
    dispatch(todoActionRequest())
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((res)=>dispatch(todoActionSuccess(res.data)))
    .catch(()=>{
      dispatch(todoActionFailure())
    })
  }
  useEffect(()=>{
    getTodo()
  },[])
  console.log(data)
 
  return (

    <div style={{textAlign:'center'}}>
      <TodoInput/>
    {/* add TodoInput component here */}
    {/* map through the todos array and display the tasks */}
    <div data-testid = 'todos-wrapper'>
     {data.todos.length>0 && data.todos.map((e)=><p> {e.title} - <span>{e.status?"True":"False"}</span> </p>)}
    </div>
    </div>
  );
};

export default Todos;
