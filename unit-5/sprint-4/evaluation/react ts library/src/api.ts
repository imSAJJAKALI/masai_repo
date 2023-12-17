import axios, { AxiosResponse } from "axios";

export interface Book{
  name: string;
  author: string;
  image: string;
  chapter: number;
  quantity: number;
  id?: number;
}

const url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`

export const addBook = async(newBook:Book) => {
     const res : AxiosResponse<Book[]> = await axios.post(url,newBook)
     return res.data
};

export const getBooks = async () => {
    const res : AxiosResponse<Book[]> = await axios.get(url)
    return res.data
};

 export const updateQuantity = (id?:number) => {
  return id;
 };

 export const deleteBook = async (id?:number) => {

  const res: AxiosResponse<Book[]> = await axios.delete(`${url}/${id}`)
  return res.data
 };
