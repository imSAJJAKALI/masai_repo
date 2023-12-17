

import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'
import { getProducts } from '../redux/product/action'
import { useDispatch } from 'react-redux'

const ProductCard = ({id,image,name,brand,price,gender,category}) => {
const [searchParams]=useSearchParams()
const dispatch=useDispatch()

let obj={
  params:{
    category:searchParams.getAll("category"),
    gender:searchParams.getAll("gender"),
    _sort:searchParams.get("order")&&"price",
    _order: searchParams.get("order")
  }
}

useEffect(()=>{
  dispatch(getProducts(obj))
},[searchParams])

  return (
    <DIV>
        <img src={image} alt="" height="150px" />
        <h3>Name: {name}</h3>
        <h3>Brand: {brand}</h3>
        <h3>Price: {price}</h3>
        <p>Gender: {gender}</p>
        <p>Category: {category}</p>
        <Link to={`/edit/${id}`}>Edit</Link>
    </DIV>
  )
}

export default ProductCard

const DIV=styled.div`
background-color:teal;
margin:10px;
padding:10px;
border-radius:10px;
`
