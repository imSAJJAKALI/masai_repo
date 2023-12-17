import React, { useEffect } from 'react'
import Sidebar from '../Component/Sidebar'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/product/action'
import ProductCard from '../Component/ProductCard'

const Home = () => {
  const dispatch=useDispatch()
  const {products}=useSelector((store)=>store.productReducer)
  console.log(products)

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <DIV>
      <div className='sidebar'>

      <Sidebar/>
      </div>
      <div className='product-list'  >
        {products?.map((el)=> <ProductCard key={el.id} {...el}/>)}
       
      </div>
    </DIV>
  )
}

export default Home

const DIV=styled.div`
display:flex;
.sidebar{
  padding:15px;
  width:15%;
  height:100vh;
  background-color:teal;
  color:white;
}
.product-list{
 width:85%;
 margin:10px;
display:grid;
grid-template-columns:repeat(3,1fr);
}
`
