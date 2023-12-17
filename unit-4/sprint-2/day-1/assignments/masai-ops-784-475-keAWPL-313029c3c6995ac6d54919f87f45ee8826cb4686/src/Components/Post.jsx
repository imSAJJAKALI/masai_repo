import React from "react";
const Post = (props) => {
 
  return (
    <div className="post">
      <h1 >
       {props.title}
      </h1>
      <h3>
      {props.body}
      </h3>
    </div>
  );
};

export default Post;
