import React from "react";
import { Book } from "../api";

interface card extends Book{
  handleDelete:(id?:number)=>void;
}

export const BookCard = ({id,
	quantity,
	author,
	chapter,
	image,
	name,
 handleDelete
}:card) => {
  return <div className="book-card">
    <img src={image} className="book-image" />
			<p className="book-name">{name}</p>
			<p className="book-author ">{author}</p>
			<p className="book-chapter ">{chapter}</p>

			<div style={{ display: "flex", flexDirection: "row" }}>
				<button
					className=""
					data-testid="increase-quantity"
					>
					quantity++
				</button>
				<span className="book-quantity">{quantity}</span>
				<button
					className=""
					data-testid="decrease-quantity">
					quantity--
				</button>
			</div>
			<button
			  // onClick={()=>handleDelete(id)}
				data-testid="delete-button">
				Delete
			</button>
  </div>;
};
