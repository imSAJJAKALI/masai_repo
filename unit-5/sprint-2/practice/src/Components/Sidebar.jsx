import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { apiChange, getMatches } from "../Redux/Matches/action";

export const Sidebar = () => {
  const [sort,setSort]=useState('')
  const dispatch=useDispatch()
const [page,setPage]=useState(1)
console.log(sort)


useEffect(()=>{
 dispatch(getMatches(page,sort))

},[page,sort])

  return (
    <DIV>
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="sort-asc" type="radio" name="sort" value={"asc"} onChange={()=>setSort("asc")} />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onChange={()=>setSort("desc")}
        />
        <label>Descending</label>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h3 data-testid="page-number">Page No. {page}</h3>
      <button disabled={page==1} data-testid="previous-page" onClick={()=>setPage(page-1)} >Previous</button>
      <br />
      <br />
      <button data-testid="next-page" onClick={()=>setPage(page+1)} >Next</button>
    </DIV>
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
