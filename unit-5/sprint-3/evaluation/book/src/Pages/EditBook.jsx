import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";
import { useDispatch } from "react-redux";

const initialState={
  book_name:"",
  author:"",
  no_of_chapters:"",
}

export const EditBook = () => {
  const disptach=useDispatch()
  const [bookDet,setBookDet]=useState(initialState)
  const [data,setData]=useState({})
  const location =useLocation()
  const pageNum=useParams()
  console.log(data)
  const getData=()=>{
    
    axios.get(`http://localhost:8080/books/${pageNum.id}`)
    .then((res)=>setData(res.data))
  }
  
  useEffect(()=>{
    getData()
  },[])
  
  initialState.book_name=data.book_name
  initialState.author=data.author
  initialState.no_of_chapters=data.no_of_chapters


  




const handleChange=(e)=>{
  const {name,value}=e.target
  console.log(name,value)
  setBookDet({...bookDet,[name]:name==='no_of_chapters'?+value:value})
}
const handlePatch=()=>{
  disptach(editBook(bookDet,pageNum))
}
 
  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID: {data.id} </h1>
      <input type="text" placeholder="Name" data-testid="book-name" value={bookDet.book_name} name="book_name" onChange={handleChange}/>
      <input type="text" placeholder="Author" data-testid="book-author" value={bookDet.author} name="author" onChange={handleChange} />
      <input
        type="number"
        placeholder="Number of Chapter"
        data-testid="book-chapter"
        value={bookDet.no_of_chapters}
        name="no_of_chapters"
        onChange={handleChange}
      />
      <button data-testid="update-book" onClick={handlePatch}>Update</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
