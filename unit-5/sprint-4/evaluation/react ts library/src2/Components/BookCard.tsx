import React from "react";
import { ram } from "../App";

export interface card extends ram {
	handleAdd: (quantity: number, id?: number) => void;
	handleReduce: (quantity: number, id?: number) => void;
	handleDelete: (id?: number) => void;
}

export const BookCard = ({
	id,
	quantity,
	author,
	chapter,
	image,
	name,
	handleDelete,
	handleReduce,
	handleAdd,
}: card) => {
	return (
		<div
			className="book-card"
			style={{
				display: "flex",
				border:"1px solid gray",
				margin:"auto",
				padding:"10px",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<img src={image} className="book-image" />
			<p className="book-name">{name}</p>
			<p className="book-author ">{author}</p>
			<p className="book-chapter ">{chapter}</p>

			<div style={{ display: "flex", flexDirection: "row" }}>
				<button
					className=""
					data-testid="increase-quantity"
					disabled={quantity >= 10}
					onClick={() => {
						handleAdd(++quantity, id);
					}}>
					quantity++
				</button>
				<span className="book-quantity">{quantity}</span>
				<button
					className=""
					data-testid="decrease-quantity"
					disabled={quantity == 0}
					onClick={() => handleReduce(--quantity, id)}>
					quantity--
				</button>
			</div>
			<button
				style={{ padding: "10px", background: "red" }}
				onClick={() => handleDelete(id)}
				className="delete-button"
				data-testid="delete-button">
				Delete
			</button>
		</div>
	);
};
