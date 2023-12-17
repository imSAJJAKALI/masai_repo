import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'

export const RecipeDetail = () => {
const [data,setData]=useState({})
const [dispalyItem,setDisplayItem]=useState(false)
const prodNum=useParams()
console.log(data)
useEffect(()=>{
axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/recipe/${prodNum.id}`)
.then((res)=>setData(res.data))
setDisplayItem(true)
},[])
console.log(data)

  return (
    <>
    {dispalyItem &&  <div className={"recipe-card"} key={data.id} style={{border:'1px solid blue' , padding:'10px', margin:'10px' }}>
      {/* **Display the id of the item in h1 tag with class `recipe-id`** */}
      {/* Display all recipe details here */}
      
        <h1>{data.id}</h1>
        {/* Dispaly Recipe Details Here */}
    <img src={data.image} alt="" className="recipe-image" width={'250px'} />
    <h3 className="recipe-name">{data.name}</h3>
    <h2 className="recipe-type" >Type: {data.type}</h2>
    <p className="recipe-category">Category: {data.category}</p>
    <h3 className='recipe-price' >{data.price}</h3>
   <h3 className="recipe-ingredient" key={data.id}>ingredients:-{data.ingredients?.map((el)=><p>-{el}-</p>)}</h3>
    </div>}
    </>
   
  
  );
};
