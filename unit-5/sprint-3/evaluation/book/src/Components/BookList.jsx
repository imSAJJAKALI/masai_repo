import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import { BookCard } from "./BookCard";

export const BookList = () => {
const dispatch =useDispatch()
const {isLoading,isError,books}=useSelector((store)=>store.bookReducer)


useEffect(()=>{
  dispatch(getBooks())
},[])

  return (
   
     <div data-testid="book-list" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
      {/* Map through books using BookCard component */}
    
     { books?.map((el)=><BookCard key={el.id} {...el}/>)}
    </div>
  );
};
