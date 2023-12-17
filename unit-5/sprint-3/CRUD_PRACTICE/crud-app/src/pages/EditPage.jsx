import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'

const EditPage = () => {
    const pagno=useParams()
    const [data,setData]=useState({})
let page=pagno.id;
console.log(data)
     useEffect(()=>{
  axios.get(`http://localhost:8080/products/${page}`)
  .then((res)=>setData(res.data))
    },[])

  return (
    <DIV>
        <img src={data.image} alt="" height="150px" />
        <input type="text" value={data.image} name='image'  />
        <h3>Name: {data.name}</h3>
        <input type="text" value={data.name} name='name' />
        <h3>Brand: {data.brand}</h3>
        <input type="text" value={data.brand}  name='brand'/>
        <h3>Price: {data.price}</h3>
        <input type="text" value={data.price} name='price'/>
        <p>Gender: {data.gender}</p>
        <input type="text" value={data.gender} name='gender' />
        <p>Category: {data.category}</p>
        <input type="text" value={data.category} name='category' />
        <br />
        <br />
       <button>SAVE</button>
    </DIV>
  )
}

export default EditPage

const DIV=styled.div`
background-color:teal;
width:300px;
display:flex;
flex-direction:column;
margin:10px;
padding:10px;
border-radius:10px;
margin:auto;
`
