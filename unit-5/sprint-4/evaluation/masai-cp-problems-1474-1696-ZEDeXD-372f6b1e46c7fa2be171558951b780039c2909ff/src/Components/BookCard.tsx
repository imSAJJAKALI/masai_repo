import React from "react";
import { prod } from "../App";

export const BookCard = ({id,image,name,author,chapter,quantity}:prod) => {
  return <div className="book-card">
    <img className="book-image" src={image} alt="" />
    <h3 className="book-name">{name}</h3>
    <h4 className="book-author">{author}</h4>
    <p className="book-chpter">{chapter}</p>
    <p className="book-quntity">{quantity}</p>
    <button></button>
  </div>;
};
