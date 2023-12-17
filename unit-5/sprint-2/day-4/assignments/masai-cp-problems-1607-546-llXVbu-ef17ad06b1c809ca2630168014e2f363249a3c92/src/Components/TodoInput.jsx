import React,{useState} from "react";
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addTodoError, addTodoRequest, addTodoSuccess } from "../Redux/action";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  const dispatch=useDispatch()
const [title,setTitle]=useState('')

const handleTitle=(e)=>{
  setTitle(e.target.value)
}

const handleAddTodo=()=>{
  let newTodo={
    title:title,
    status:false
  }
  dispatch(addTodoRequest())
 axios.post("http://localhost:8080/todos",newTodo)
 .then((res)=>dispatch(addTodoSuccess(res.data)))
 .catch(()=>dispatch(addTodoError()))
}

  return (
    <div>
      <input
        type="text"
        value={title}
        data-testid="todo-input"
        onChange={handleTitle}
      />
      <button data-testid="todo-add-btn" onClick={handleAddTodo} >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
