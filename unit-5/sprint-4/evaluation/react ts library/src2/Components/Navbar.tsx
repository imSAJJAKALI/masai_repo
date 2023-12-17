import React from "react";

interface value {
	val: string;
}

export const Navbar = ({ val }: value) => {
	return (
		<div >
			<h2>Library Management</h2>
			<a className="home-link" href="/">
				Home
			</a>
			<a className="add-book-link" href="/add-book">
				Add New Book
			</a>
			<h3 data-testid="page-name">{val}</h3>
		</div>
	);
};
