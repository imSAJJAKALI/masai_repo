import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AddPost } from "./AddPost";

export const MainRoutes = () => {
  return <div>

    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/add-post" element={<AddPost/>}/>
    </Routes>
  </div>;
};
