import React from "react";
import { prod } from "../App";
import {useState} from 'react'
import { getBooks } from "../api";
import { BookCard } from "./BookCard";


export const BookList = () => {
  const [products,setProducts]=useState<prod[]>([])

const getData=()=>[
  getBooks().then((res:prod[])=>{
    setProducts(res)
  })
]
  
  return <div data-testid="book-list">
    {products.map((el)=><BookCard key={el.id} {...el} />)}
  </div>;
};
