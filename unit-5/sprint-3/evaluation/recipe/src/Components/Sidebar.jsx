import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useSearchParams} from 'react-router-dom'

import styled from "styled-components";

export const Sidebar = () => {
const [searchParams,setSearchParams]=useSearchParams()

const initialCategory=searchParams.getAll('category')
const initialType=searchParams.getAll('type')
const initialOrder=searchParams.get('order')

const [category,setCategory]=useState(initialCategory||[])
const [type,setType]=useState(initialType||[])
const [order,setOrder]=useState(initialOrder||'')

useEffect(()=>{
let params={
   category,type
}
order && (params.order=order);
setSearchParams(params)
},[category,type,order])

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

const handleType=(e)=>{
  const {value}=e.target
  let newType=[...type]
  if(newType.includes(value)){
    newType=newType.filter((e)=>e!=value)
  }else{
    newType.push(value)
  }
  setType(newType)
}

const handleOrder=(e)=>{
  const {value}=e.target
  setOrder(value)
}

  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="recipe-indian" type="checkbox"  checked={category.includes('indian')} value='indian'  onChange={handleCategory} />
        <label>Indian</label>
        <br />
        <br />
        <input data-testid="recipe-italian" type="checkbox" checked={category.includes('italian')} value='italian'  onChange={handleCategory}/>
        <label>Italian</label>
        <br />
        <br />
        <input data-testid="recipe-chinese" type="checkbox" checked={category.includes('chinese')} value='chinese'  onChange={handleCategory}/>
        <label>Chinese</label>
        <br />
        <br />
        <input data-testid="recipe-thai" type="checkbox" checked={category.includes('thai')} value='thai' onChange={handleCategory} />
        <label>Thai</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Veg / Non-Veg</h3>
      <div>
        <input data-testid="recipe-veg" type="checkbox" value={'veg'}  checked={type.includes('veg')} onChange={handleType} />
        <label>Veg</label>
        <br />
        <br />
        <input data-testid="recipe-non-veg" type="checkbox" value={'non-veg'} checked={type.includes('non-veg')}  onChange={handleType} />
        <label>Non Veg</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div>
        <input data-testid="recipe-sort-asc" type="radio" name="sort" value={'asc'} checked={order.includes('asc')} onChange={handleOrder} />
        <label>Ascending</label>
        <br />
        <br />
        <input data-testid="recipe-sort-desc" type="radio" name="sort" value={'desc'} checked={order.includes('desc')} onChange={handleOrder} />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 13%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  box-shadow: 2px 2px 2px gray;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
