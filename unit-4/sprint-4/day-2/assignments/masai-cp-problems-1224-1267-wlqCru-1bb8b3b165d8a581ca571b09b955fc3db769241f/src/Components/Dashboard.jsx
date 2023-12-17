import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Dashboard() {
  const [text,setText]=useState("")
  const [data,setData]=useState([])
  const [fil,setFil]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT=8080}/movies`)
    .then((res)=>setData(res.data))
  },[])

 const movies=data.filter(data=>
 
  data.title[0]==text
  )

  

  console.log(movies)
  return (
    <div>
       <input
          style = {{padding:"5px", margin: "10px", width: 200}}
          type = "text"
          data-testid = "search_key"
          placeholder = "Search Movie Username"
          onChange={(e)=>{setText(e.target.value);console.log(e.target.value)}}
      />
      <div data-testid = "movie_results" >
        {/* Add movie results based of search key here */}
        {movies.map((e)=><div><p>{e.title}</p><p>{e.year}</p></div>)}
        
      </div>
      
    </div>
  )
}