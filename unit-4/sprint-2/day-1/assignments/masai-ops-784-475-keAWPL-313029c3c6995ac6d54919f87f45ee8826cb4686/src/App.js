import "./App.css";
import Post from "./Components/Post";
import { useState } from "react";
const getData=(url)=>{
  return fetch(url)
  .then((res)=>res.json())
  .catch((err)=>console.log(err))
}
function App() {
  const [post,setPost]=useState([])
  const fetchData=async()=>{
       try{
          const data=await getData(`https://jsonplaceholder.typicode.com/posts`)
          setPost(data)
          
       }catch(error){
          console.log(error)
       }
  }

  

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn" onClick={fetchData}
      >
        GET POSTS
      </button>
      <div id="post-container">
       {post.map((el)=><Post title={el.title} body={el.body}> </Post>)}
      </div>
    </div>
  );
}

export default App;
