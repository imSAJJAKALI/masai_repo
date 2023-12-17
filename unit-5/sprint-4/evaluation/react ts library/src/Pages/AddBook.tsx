import React, { useReducer } from "react";
import { addBook } from "../api";
import { Navbar } from "../Components/Navbar";

interface ValueType {
  name: string;
  image: string;
  author: string;
  chapter: number;
  quantity: number;
}

const initialValue: ValueType = {
  name: "",
  image: "",
  author: "",
  chapter: 0,
  quantity: 0
}

type ActionType =
  | { type: "NAME"; payload: string }
  | { type: "IMAGE"; payload: string }
  | { type: "AUTHOR"; payload: string }
  | { type: "CHAPTER"; payload: number }
  | { type: "QUANTITY"; payload: number };

const reducer = (state: ValueType, action: ActionType) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "IMAGE":
      return { ...state, image: action.payload };
    case "AUTHOR":
      return { ...state, author: action.payload };
    case "CHAPTER":
      return { ...state, chapter: action.payload };
    case "QUANTITY":
      return { ...state, quantity: action.payload };
    default:
      return state;
  }
}

export const AddBook = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = () => {
    addBook(state)
  }

  return (
    <div style={{display:"flex",flexDirection:"column", width:"25%",margin:"auto",
    gap:"20px",border:"2px solid gray",padding:'20px',marginTop:"40px",backgroundColor:"#E1AEFF",borderRadius:"10px",color:"#73BBC9"}}>
      <Navbar val={"Add new Book"}/>
      <h1>Add New Book</h1>
      <input type="text" placeholder="Book Name" onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })} />
      <input type="text" placeholder="Book Image" onChange={(e) => dispatch({ type: "IMAGE", payload: e.target.value })} />
      <input type="text" placeholder="Book Author" onChange={(e) => dispatch({ type: "AUTHOR", payload: e.target.value })} />
      <input type="number" placeholder="Chapter" onChange={(e) => dispatch({ type: "CHAPTER", payload: parseInt(e.target.value) })} />
      <input type="number" placeholder="Quantity" onChange={(e) => dispatch({ type: "QUANTITY", payload: parseInt(e.target.value) })} />
      <button style={{width:"30%",margin:"auto"}} onClick={handleSubmit}>Add Book</button>
    </div>
  );
};
