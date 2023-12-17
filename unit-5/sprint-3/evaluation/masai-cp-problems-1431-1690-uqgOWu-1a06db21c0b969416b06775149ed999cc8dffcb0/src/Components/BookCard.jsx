import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({id,cover_photo,book_name,author,category,release_year,chapters}) => {
  chapters.map((e)=>console.log(e.pages))
  
  return (
    <DIV>
    <div className="book-card" key={id}>
      <img className="book-image" src={cover_photo} alt="" width={'100px'}/>
      <h3 className="book-name" >{book_name}</h3>
      <p className="book-author" >{author}</p>
      <h3 className="book-category" >{category}</h3>
      <p className="book-year">{release_year}</p>
      <p className="book-chapter" >Chapter: {chapters.map((e)=>{return e.pages})}</p>
    <button  className="edit-book">
      <Link to={`/edit-book/${id}`}>Edit</Link>
    </button>


      {/* ``` - Show Image in image tag with class `book-image` - Show Book name
      with class `book-name` - Show Author with class `book-author` - Show
      Category with class `book-category` - Show Release year with class
      `book-year` - Show Number of chapters with class `book-chapter` * Do not
      add any extra text, See the Image provided to know what needs to be
      displayed * ``` */}
    </div>
    </DIV>
  );
};

const DIV=styled.div`

dispaly:grid;
grid-template-columns:auto auto auto;
gap:10px;
`