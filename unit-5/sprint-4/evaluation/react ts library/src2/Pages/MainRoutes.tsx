import React from "react";
import { AddBook } from "./AddBook";
import { HomePage } from "./HomePage";
import { Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
	return (
		<div>
			{/* Add all routes here */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/add-book" element={<AddBook />} />
			</Routes>
		</div>
	);
};
