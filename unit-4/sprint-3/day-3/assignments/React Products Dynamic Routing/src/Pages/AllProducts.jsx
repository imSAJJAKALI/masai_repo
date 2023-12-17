import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'

export default function AllProducts() {

  const [data,setData]=useState([])

  useEffect(()=>{

    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((act)=>setData(act))
    .catch((err)=>console.log(err))
  },[])

  return (
    <div>
      <div>All Products</div>
      <div data-testid = "products-wrapper">
      {data.map((e)=>
    
      <div key={e.id}>
       
        <h1>{e.name}</h1>
        <p>{e.price}</p>
        <Link to={`products/${e.id}`}>More Details</Link>
      </div>
    
      )}
      </div>
    </div>
  )
}
