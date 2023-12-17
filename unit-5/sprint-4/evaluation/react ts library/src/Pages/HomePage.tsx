import React from "react";
import { Navbar } from "../Components/Navbar";
import { BookList } from "../Components/BookList";
import {useState,useEffect} from 'react'
import { Book, getBooks } from "../api";




export const HomePage = () => {
const [data,setData]=useState<Book[]>([])

useEffect(()=>{
getBooks().then((res : Book[])=>setData(res))
},[]);


  return (
    <div>
      <Navbar val={"HomePage"} />
      <BookList data={data} setData={setData}  />
    </div>
  );
};
