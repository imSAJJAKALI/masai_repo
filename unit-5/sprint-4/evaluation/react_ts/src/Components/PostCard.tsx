import React from "react";
import {prodType} from '../App'

interface card extends prodType{
  handleLike:(like:number,id?:number)=>void;
  handleDislike:(dislike:number,id?:number)=>void;
  handleDelete:(id?:number)=>void;
}


export const PostCard = ({id,name,image,author,content,category,like,dislike}) => {
  return <div className="post-card">
    <img className="post-image" src={image} alt="" />
    <h3 className="post-name">{name}</h3>
    <h4 className="post-author">{author}</h4>
    <h4 className="post-content">{content}</h4>
    <h4 className="post-category">{category}</h4>
    <button onClick={()=>hadleLike} >{like}</button>
    <button  onClick={()=>hadleLike}>{dislike}</button>
  </div>;
};
