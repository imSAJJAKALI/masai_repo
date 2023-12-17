import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const initialCategory=searchParams.getAll('category')
  const initialOrder=searchParams.get('order')
const [category,setCategory]=useState(initialCategory||[])
const [order,setOrder]=useState(initialOrder||'')

useEffect(()=>{
  let params={
    category
  }
 
  order && (params.order=order)

  setSearchParams(params)
},[category,order])

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

const handleOrder=(e)=>{

 const {value}=e.target
 setOrder(value)
}


  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="novel-filter" type="checkbox" value={"Novel"}  checked={initialCategory.includes('Novel')} onChange={handleCategory} />
        <label>Novel</label>
        <br />
        <input
          data-testid="science-fiction-filter"
          type="checkbox"
          value={"Science_Fiction"}
          onChange={handleCategory}
          checked={initialCategory.includes('Science_Fiction')}
        />
        <label>Science Fiction</label>
        <br />
        <input
          data-testid="thriller-filter"
          type="checkbox"
          value={"Thriller"}
          onChange={handleCategory}
          checked={initialCategory.includes('Thriller')}
        />
        <label>Thriller</label>
        <br />
        <input
          data-testid="motivational-filter"
          type="checkbox"
          value={"Motivational"}
          onChange={handleCategory}
          checked={initialCategory.includes('Motivational')}

        />
        <label>Motivational</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Release Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={handleOrder} defaultChecked={ order== 'asc'} />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={handleOrder}
          defaultChecked={order=='desc'}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
