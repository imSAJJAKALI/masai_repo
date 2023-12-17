import {useEffect, useState} from 'react';

function Data(){
const [data,setData]=useState([])
useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts`)
.then((e)=>e.json())
.then((res)=>setData(res))
.catch((err)=>console.log(err))
},[])


  return(
    <div>
      {data.map(e=><li>{e.title}</li>)}
    </div>
  )
}
export default Data;