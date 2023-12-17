import {useState,useEffect} from 'react'

export default function Home() {
 const [data,setData]=useState([])

 useEffect(()=>{

  fetch(`http://localhost:8080/books`)
  .then((res)=>res.json())
  .then((json)=>setData(json))
  .catch((err)=>console.log(err))

 },[])

  return (
    <div>

       {data.map((e)=>
       
      <div className="mainContainer">
       <div  className="bookCard" >
       <h5 className = "title" > Title: {e.title} </h5>
       <div className = "price" > Price: {e.price} </div>
       <div className = "author" > Author: {e.author}</div>
     </div>
   </div>

       
       )}
       
    </div>
  )
}
