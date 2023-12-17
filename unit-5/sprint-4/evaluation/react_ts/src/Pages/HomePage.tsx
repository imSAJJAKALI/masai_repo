import React from "react";
import { Navbar } from "../Components/Navbar";
import { PostList } from "../Components/PostList";

export const HomePage = () => {
  return (
    <div>
      <Navbar val={"Home Page"} />
      <PostList />
    </div>
  );
};
