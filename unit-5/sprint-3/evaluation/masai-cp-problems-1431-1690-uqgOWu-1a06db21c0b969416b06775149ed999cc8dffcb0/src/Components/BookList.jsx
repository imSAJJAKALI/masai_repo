import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import { BookCard } from "./BookCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const BookList = () => {
  const books=useSelector((store)=>store.bookReducer.books)
  const location=useLocation()
  const [searchParms]=useSearchParams()
  const dispatch=useDispatch()

  const obj={
    params:{
      category:searchParms.getAll("category"),
      _sort:searchParms.get("order") && "release_year",
      _order:searchParms.get('order')
    }
  }
  
  useEffect(()=>{
    dispatch(getBooks(obj))
  },[location.search])
  console.log(books)
  return (
    <div data-testid="book-list">
      {books.length>0 && books.map((el)=>{
        return <BookCard {...el} />
      })}
    </div>
  );
};
