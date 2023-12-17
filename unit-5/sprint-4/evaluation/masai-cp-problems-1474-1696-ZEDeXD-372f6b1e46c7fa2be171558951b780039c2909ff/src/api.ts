import { AxiosResponse } from "axios";
import { prod } from "./App";
import axios from 'axios';



const URL=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`

export const addBook = async (data:prod) => {
    const res:AxiosResponse<prod[]> = await axios.post(URL,data)
    return res.data
};

export const getBooks = () => {};

export const updateQuantity = () => {};

export const deleteBook = () => {};
