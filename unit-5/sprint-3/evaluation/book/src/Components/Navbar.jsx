import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getBooks } from "../Redux/BookReducer/action";

export const Navbar = () => {
  
const [query , setQuery]=useState('')
const dispatch=useDispatch()
const ref= useRef()

const paramObj={
  params:{
    q:query && query
  }
}

useEffect(()=>{
  if(ref.query){
    clearInterval(ref.current)
    
  }
  useRef.current=setTimeout(()=>{
    dispatch(getBooks(paramObj))
  },1000)
},[query])

const handleSearch=()=>{

}

  return (
    <DIV>
      <h2>Book Store</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <div>
        <input type="text" placeholder="Search " onChange={(e)=>setQuery(e.target.value)} />
        <button >Search</button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;
