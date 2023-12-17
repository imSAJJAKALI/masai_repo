import React from "react";

interface value{
  val:string;
}

export const Navbar = ({val}:value) => {
  return (
    <div>
      <h2>Media Post</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-post-link" href="/add-post">
        Add New Post
      </a>
      <h3 data-testid="page-name">{val}</h3>
    </div>
  );
};
