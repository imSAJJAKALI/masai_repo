import React from "react";
import { Book, deleteBook } from "../api";
import { BookCard } from "./BookCard";

interface bookLi{
  data:Book[];
  setData:React.Dispatch<React.SetStateAction<Book[]>>;
}


export const BookList = ({data,setData}:bookLi) => {
  console.log(data)

  const handleDelete=(id?:number)=>{
    deleteBook(id).then((res:Book[])=>setData(res))
  }

  return <div data-testid="book-list">
    {data?.map((el)=><BookCard key={el.id} {...el}  handleDelete={handleDelete} />)}
  </div>;
};
