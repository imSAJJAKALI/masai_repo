import React from "react";
import { ram } from "../App";
import { BookCard } from "./BookCard";
import { deleteBook, updateQuantity } from "../api";

interface main {
	data: ram[];
	setData: React.Dispatch<React.SetStateAction<ram[]>>;
}

export const BookList = ({ data, setData }: main) => {
	console.log({ data });
	const handleDelete = (id?: number) => {
		deleteBook(id).then(() => {
			const getData = data.filter((el) => el.id !== id);
			setData(getData);
		});
	};

	const addQuantity = (quantity: number, id?: number) => {
		updateQuantity(quantity, id);
		const getData = data.map((el) =>
			el.id === id ? { ...el, quantity: quantity } : el
		);
		setData(getData);
	};

	const reduceQuantity = (quantity: number, id?: number) => {
		updateQuantity(quantity, id);
		const getData = data.map((el) =>
			el.id === id ? { ...el, quantity: quantity } : el
		);
		setData(getData);
	};
	return (
		<div data-testid="book-list" style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:" 10px"}}>
			{data.map((el) => (
				<BookCard
					handleAdd={reduceQuantity}
					handleReduce={addQuantity}
					handleDelete={handleDelete}
					key={el.id}
					{...el}
				/>
			))}
		</div>
	);
};
