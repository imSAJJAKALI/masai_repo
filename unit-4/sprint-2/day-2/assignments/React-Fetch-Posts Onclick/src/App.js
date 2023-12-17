import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Components/Post";
function App() {
  const [btn,setBtn]=useState(false)
const [data,setData]=useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>res.json())
    .then((actData)=>setData(actData))
  },[])
console.log(data[0])
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={()=>setBtn(!btn)}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {btn?data.map((e)=><Post titel={e.title} post={e.body}/>):''}
      </div>
    </div>
  );
}

export default App;
