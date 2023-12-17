import axios,{ AxiosResponse } from "axios";
import { prodType } from "./App";

const URL=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`

export const addPost = async(post:prod) => {
    const res:AxiosResponse<prod>= await axios.post(URL,post)

    return res.data
    
};

export const getPosts =async () => {
    const res: AxiosResponse<prod[]>= await axios.get(URL)

    return res.data
};

export const updateLike = async (like:number, id?:number) => {
    const res: AxiosResponse<prod[]>=await axios.patch(`${URL}/${id}`, {like:like})

    return res.data
};

export const updateDisLike =async (dislike:number, id?:number) => {
    const res: AxiosResponse<prod[]>=await axios.patch(`${URL}/${id}`, {dislike:dislike})

    return res.data
};

export const deleteProduct = async(id?:number) => {
    const res: AxiosResponse<prod[]>=await axios.delete(`${URL}/${id}`)

    return res.data
};
