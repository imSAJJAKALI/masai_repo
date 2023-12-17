import React from "react";
import { Navbar } from "../Components/Navbar";
import { prod } from "../App";
import { useState } from "react";
import { addBook, getBooks } from "../api";

export const AddBook = () => {
 const [data, setData] = useState<prod>({
  name: "",
  author: "",
  image: "",
  chapter: 0,
  quantity: 0,
  id: 0,
 });
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value, type, name } = e.target;
  setData({ ...data, [name]: type === "text" ? value : +value });
 };
 const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
  e.preventDefault();
 getBooks(data)
 };
 return (
  <div>
   <Navbar  />
   <form onSubmit={handleSubmit}>
    <input
     className="book-name"
     placeholder="Book-Name"
     value={data.name}
     name="name"
     onChange={handleChange}
     type="text"
    />
    <input
     className="book-author"
     placeholder="Book-Author"
     value={data.author}
     name="author"
     onChange={handleChange}
     type="text"
    />
    <input
     className="book-image"
     placeholder="Book-Image"
     value={data.image}
     name="image"
     onChange={handleChange}
     type="text"
    />
    <input
     className="book-chapter"
     placeholder="0"
     value={data.chapter}
     name="chapter"
     onChange={handleChange}
     type="number"
    />
    <input
     className="book-quantity"
     placeholder="0"
     value={data.quantity}
     name="quantity"
     onChange={handleChange}
     type="number"
    />
    {/* <input className="submit-form" type="submit" placeholder="submit"/> */}
    <button className="submit-form" type="submit">
     Submit
    </button>
   </form>
</div>);
};