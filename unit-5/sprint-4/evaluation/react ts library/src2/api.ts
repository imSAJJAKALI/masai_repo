import { ram } from "./App";
import axios, { AxiosResponse } from "axios";

const URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`;


export const addBook = async (data: ram) => {
	const res: AxiosResponse<ram> = await axios.post(URL, data);
	return res.data;
};

export const getBooks = async () => {
	const res: AxiosResponse<ram[]> = await axios.get(URL);
	return res.data;
};

export const updateQuantity = async (quantity: number, id?: number) => {
	const res: AxiosResponse<ram[]> = await axios.patch(`${URL}/${id}`, {
		quantity: quantity,
	});
	return res.data;
};

export const deleteBook = async (id?: number) => {
	const res: AxiosResponse<ram[]> = await axios.delete(`${URL}/${id}`);
	return res.data;
};
