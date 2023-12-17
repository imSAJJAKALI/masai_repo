import React, { useEffect, useState } from "react";
import GroceryItem from "./GroceryItem";

const Grocerydetails = () => {
const [data,setData]=useState([])
const [btn,setBtn]=useState(false)
// const [ftc,setFtc]=useState(true)
// console.log(btn)
  useEffect(()=>{
  
      fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`)
    .then((res)=>res.json()).then((datas)=>setData(datas.data))
    .catch((err)=>console.log(err))

   },[])


  return (
    <div data-cy='container'>
      <h1>Groceries</h1>
     {btn?'':<button onClick={()=>setBtn(!btn)} className="get-groceries">Get-Groceries</button>}
     {btn? data.map((e,i)=><GroceryItem keys={e.id} image={e.image} name={e.name} price={e.price}/>):''} 
    </div>
  );
};

export default Grocerydetails;
