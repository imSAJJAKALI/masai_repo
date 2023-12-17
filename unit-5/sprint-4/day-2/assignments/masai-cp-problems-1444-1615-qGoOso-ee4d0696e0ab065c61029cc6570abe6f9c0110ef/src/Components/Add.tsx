import React, { useState } from "react";



const Add = () => {
const [title,setTitle]=useState<string>("")
const [description,setDescription]=useState<string>("")
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e?.preventDefault()
  const todo = {
    title,
    description,
    status: false
  };
  const todos = localStorage.getItem("todos");
    const parsedTodos = todos ? JSON.parse(todos) : [];
 localStorage.setItem("todos",JSON.stringify([...parsedTodos,todo]))
}

  return (<div style={{border:"1px solid blue",padding:"20px",borderRadius:"5px",marginLeft:"20px",marginTop:"20px"}} >
    <form data-testid="form"
    onSubmit={handleSubmit}
    style={{display:"flex",flexDirection:"column",margin:"5px",padding:"5px"}}
    >
      <input data-testid="title" type="text" id="title" 
      onChange={(e)=>setTitle(e.target.value)}
      style={{fontSize:"large"}} placeholder="Title" />
      <textarea
      style={{fontSize:"large"}}
      onChange={(e)=>setDescription(e.target.value)}
      placeholder="Description"
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
    </div>
  );
};

export default Add;
