import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { BookList } from "../Components/BookList";
import { ram } from "../App";
import { getBooks } from "../api";

export const HomePage = () => {
	const [data, setData] = useState<ram[]>([]);

	useEffect(() => {
		getBooks().then((res: ram[]) => {
			setData(res);
		});
	}, []);

	return (
		<div>
			<Navbar val={"Home Page"} />
			<BookList data={data} setData={setData} />
		</div>
	);
};
