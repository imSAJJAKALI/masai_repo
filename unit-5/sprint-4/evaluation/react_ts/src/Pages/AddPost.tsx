import React,{useState} from "react";
import { Navbar } from "../Components/Navbar";
import {prodType} from "../App"
import { addPost } from "../api";

export const AddPost = () => {
  const [post,setpost]=useState<prodType>({
    name: "",
    author: "",
    image: "",
    content: "",
    category: "",
    like: 0,
    dislike: 0,
  })

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value, type, name} =e.target
    setpost({...post, [name]: type ==="text"? value:+value})

  }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    addPost(post)
  }

  return <div>
    <Navbar val={"Add New Product"}/>
    <form onSubmit={handleSubmit}>
    <input type="text" className="post-name"   name="name" value={post.name} placeholder="" onChange={handleChange}/>
    <input type="text" className="post-image"  name="author" value={post.author} placeholder="" onChange={handleChange} />
    <input type="text" className="post-author"  name="image" value={post.image} placeholder="" onChange={handleChange}/>
    <input type="text" className="post-content"  name="content" value={post.content} placeholder="" onChange={handleChange} />
    <select name="category" value={post.category}  >
      <option value="">Select Category</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JS</option>
      <option value="react">React</option>
    </select>
    <button className="submit-form">Add Post</button>
    </form>
  </div>;
};
