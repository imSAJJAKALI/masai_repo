import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { postProduct } from '../redux/product/action'
import { styled } from 'styled-components'

const inititalState={
    image:"https://dummyimage.com/600x400/000/fff",
    price:"",
    brand:"",
    name:"",
    category:"",
    gender:"",
}


const Admin = () => {
    const dispatch=useDispatch()
const [product,setProducts]=useState(inititalState)

const handleChange=(e)=>{
 const {name,value}=e.target

 setProducts((pre)=>{
    return{...pre,[name]:name=='price'?+value:value}
 })
}
const handleSubmit=(e)=>{
    e.preventDefault()
 dispatch(postProduct(product))  
 setProducts(inititalState)
}

  return (
    <DIV>
        <h1>Admin-page</h1>

        <form action="" className='form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Image'  name='image' value={"https://dummyimage.com/600x400/000/fff"} onChange={handleChange}/>
            <input type="number" placeholder='Price' name='price'  value={product.price} onChange={handleChange}/>
            <input type="text" placeholder='Brand'  name='brand' value={product.brand} onChange={handleChange}/>
            <input type="text" placeholder='Name' name='name' value={product.name} onChange={handleChange} />

            <select  id="" name="category" value={product.category} onChange={handleChange}>
                <option value="">Select-Category</option>
                <option value="top-wear">Top-Wear</option>
                <option value="bottom-wear">Bottom-Wear</option>
                <option value="shoes">Shoes</option>
            </select>

            <select  id="" name="gender" value={product.gender} onChange={handleChange}>
                <option value="">Select-Gender</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
                <option value="kids">Kids</option>
            </select>
            <button>Add Product</button>
        </form>
    </DIV>
  )
}

export default Admin

const DIV=styled.div`
display:flex;
flex-direction:column;

.form{

    width:400px;
    display:flex;
    flex-direction:column;
    margin:auto;
}
`
