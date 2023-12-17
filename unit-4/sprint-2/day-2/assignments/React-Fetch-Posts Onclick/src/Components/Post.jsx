import React from "react";
import './post.css'
const Post = (props) => {
  console.log(props)
  return (
    <div className="post">
      <h1>
        {props.titel}
      </h1>
      <h3>
        {props.post}
      </h3>
    </div>
  );
};

export default Post;
