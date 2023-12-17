import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'

const getData=async(url)=>{
  try {
    let res=await fetch(url)
    let data=res.json()
    return data;
  } catch (error) {
   console.log(error) 
  }

}

export default function ProductDetails() {
  const val=useParams()
  console.log(val.id)
  const [data,setData]=useState({})
 
  useEffect(()=>{
    getData(`http://localhost:8080/products/${val.id}`)
    .then((res)=>setData(res))
  },[])

  return (
    <div data-testid = "product-details" >
      <div>
       <h1>{data.name}</h1>
       <h1>{data.price}</h1>
      </div>
    </div>
  )
}
