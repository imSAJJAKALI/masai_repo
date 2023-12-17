import React, { useState,useEffect } from "react";
import CofeeCard from "../component/CofeeCard";


const Cofee = () => {
  const [data,setData]=useState([])
 
  useEffect(()=>{

    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`)
    .then((res)=>res.json()).then((act)=>setData(act))
    .catch((err)=>console.log(err))

  },[])

// console.log(data[0].ingredients)
  // get coffee data from json server use useEffect and useState

  return (
    <div className="coffee_container">{data.map((e)=><CofeeCard 
      id={e.id}
      image={e.image} 
    title={e.title} description={e.description} price={e.price} 
    ingredients={e.ingredients}
    />)}</div>
  );
};

export default Cofee;
