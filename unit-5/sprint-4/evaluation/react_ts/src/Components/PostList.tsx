import React,{useState, useEffect} from "react";
import { prodType } from "../App";
import { deleteProduct, getPosts, updateDisLike, updateLike } from "../api";
import { PostCard } from "./PostCard";

export const PostList = () => {
   const [products, setPoducts]=useState<prodType[]>([])

  
 console.log(products);
 

   const getData=()=>{
    getPosts().then((res:prodType[])=>{
      console.log(res)
      setPoducts(res)
    })
   }

   const handleLike=(like:number, id?:number)=>{
    updateLike(like,id).then(()=>getData())
   }

   const handleDelete=(id?:number)=>{
    deleteProduct(id).then(()=>getData())

   }

   const handleDisLike=(dislike:number, id?:number)=>{
    updateDisLike(dislike,id).then(()=>getData())

   }

   useEffect(()=>{
    getData()
   },[])

  return <div data-testid="post-list">
  {products.map(el=> <PostCard handleDelete={handleDelete} handleLike={handleLike} handleDisLike={handleDisLike} key={el.id} {...el} />)}
  </div>;
};
