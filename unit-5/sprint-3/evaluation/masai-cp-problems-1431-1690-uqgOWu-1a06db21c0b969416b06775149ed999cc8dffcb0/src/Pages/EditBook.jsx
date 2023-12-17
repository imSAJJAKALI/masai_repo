import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { editBook } from "../Redux/BookReducer/action";

export const EditBook = () => {
  const [name,setName]=useState('')
  const [author,setAuthor]=useState('')
  const [chapter,setChpater]=useState('')
  const {id}=useParams()
  const dispatch=useDispatch()

  const handleEdit=()=>{
    const data={
      book_name:name,
      author:author,
       pages:chapter,
    }
    dispatch(editBook(id,data))
  }
  
  return (
    <DIV>
      <h1 data-testid="book-id">Edit Book ID: </h1>
      <input type="text" placeholder="Name" data-testid="book-name" onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder="Author" data-testid="book-author" onChange={(e)=>setAuthor(e.target.value)} />
      <input
        type="number"
        placeholder="Number of Chapter"
        data-testid="book-chapter"
         onChange={(e)=>setChpater(e.target.value)}
      />
      <button onClick={handleEdit} data-testid="update-book">Update</button>
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
