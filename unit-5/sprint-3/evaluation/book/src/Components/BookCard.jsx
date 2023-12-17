import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/BookReducer/action";

export const BookCard = ({id,cover_photo,book_name,author,category,release_year,no_of_chapters}) => {
 const [searchParams]=useSearchParams()
 const disptach=useDispatch()

 let obj={
  params:{
    category:searchParams.getAll("category"),
    _sort:searchParams.get("order")&&"release_year",
    _order:searchParams.get("order")
  }
 }

 useEffect(()=>{
  disptach(getBooks(obj))
 },[searchParams])
 
  return (
    <div className="book-card" style={{border:'1px solid blue', padding:'10px',margin:'10px'}}>
      {/* ``` - Show Image in image tag with class `book-image` - Show Book name
      with class `book-name` - Show Author with class `book-author` - Show
      Category with class `book-category` - Show Release year with class
      `book-year` - Show Number of chapters with class `book-chapter` * Do not
      add any extra text, See the Image provided to know what needs to be
      displayed * ``` */}
    <img src={cover_photo} alt="" className="book-image" height={'200px'} />
    <h3 className="book-name">{book_name}</h3>
    <h3 className="book-author">{author}</h3>
    <h3 className="book-category">{category}</h3>
    <h3 className="book-year">{release_year}</h3>
<h3 className="book-chapter">{no_of_chapters}</h3>
<button className="edit-book">
  <Link to={`/edit-book/${id}`}>Edit</Link>
</button>
    </div>
  );
};
