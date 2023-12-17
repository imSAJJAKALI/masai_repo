import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

const Sidebar = () => {
const [searchParams,setSearchParams]=useSearchParams()
const initialCategory=searchParams.getAll("category")
const initialGEnder=searchParams.getAll("gender")
const initialOrder=searchParams.get('order')
const [category,setCategory]=useState(initialCategory||[])
const [gender,setGender]=useState(initialGEnder||[])
const [order,setOrder]=useState(initialOrder||'')

console.log(order)

useEffect(()=>{
let params={
    gender,category 
}
order && (params.order=order);

    setSearchParams(params)
},[gender,category,order])

const handleCategory=(e)=>{
    const {value}=e.target
   let newCategory=[...category]
   if(newCategory.includes(value)){
    newCategory=newCategory.filter((e)=>e!=value)
   }else{
    newCategory.push(value)
   }
   setCategory(newCategory)

}
const handleGender=(e)=>{
    const {value}=e.target;
    let newGender=[...gender]
    if(newGender.includes(value)){
        newGender=newGender.filter((el)=>el!==value)
    }else{
        newGender.push(value)
    }
  setGender(newGender)
}

const handleByPrice=(e)=>{
    const {value}=e.target
    setOrder(value)
}



  return (
    <DIV>
        <h3>Filter by Category</h3>
        <div>
            <input type="checkbox" value={'top-wear'} checked={category.includes("top-wear")} onChange={handleCategory}/>
            <label htmlFor="">Top Wear</label>
        </div>
        <div>
            <input type="checkbox" value={'bottom-wear'} checked={category.includes("bottom-wear")} onChange={handleCategory}/>
            <label htmlFor="">Bottom Wear</label>
        </div>
        <div>
            <input type="checkbox" value={'shoes'} checked={category.includes("shoes")} onChange={handleCategory}/>
            <label htmlFor="">Shoes</label>
        </div>
        <br />
        <h3>Filter by Gender</h3>
        <div>
            <input type="checkbox" value={'male'} checked={gender.includes('male')} onChange={handleGender}/>
            <label htmlFor="">Men</label>
        </div>
        <div>
            <input type="checkbox" value={'female'} checked={gender.includes('female')} onChange={handleGender} />
            <label htmlFor="">Women</label>
        </div>
        <div>
            <input type="checkbox" value={'kids'} checked={gender.includes('kids')} onChange={handleGender}/>
            <label htmlFor="">Kids</label>
        </div>
        <h3>Sorting by Price</h3>
        <div>
            <input type="radio" name='order' value={'asc'} checked={initialOrder=="asc"} onChange={handleByPrice} />
            <label htmlFor="">Ascending</label>
        </div>
        <div>
            <input type="radio" name='order' value={'desc'} checked={initialOrder=='desc'} onChange={handleByPrice} />
            <label htmlFor="">Descending</label>
        </div>
    </DIV>
  )
}

export default Sidebar


const DIV=styled.div`
display:flex;
flex-direction:column;
align-items:baseline;
`
