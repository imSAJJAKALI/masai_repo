import styled from "styled-components";
import { MatchCard } from "./MatchCard";
import { useDispatch, useSelector } from "react-redux";
import { pagination } from "../Redux/Pagination/actionType";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [page,setPage]=useState(1)
 
const dispatch=useDispatch()

const pageNo=useSelector((store)=>store.Pagereducer.page)

useEffect(()=>{
   dispatch(pagination(page))
},[page])

  return (
    <>
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. {pageNo} </h3>
      <button data-testid="previous-page" onClick={()=>setPage(page+1)} >Previous</button>
      <br />
      <br />
      <button data-testid="next-page" onClick={()=>setPage(page-1)} >Next</button>
    </DIV>
    
    </>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;

  button {
    border: none;
    width: 100px;
    height: 40px;
    background-color: gray;
  }
`;
