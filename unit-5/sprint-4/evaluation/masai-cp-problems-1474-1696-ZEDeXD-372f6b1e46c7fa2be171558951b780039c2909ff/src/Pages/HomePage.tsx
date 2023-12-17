import React from "react";
import { Navbar } from "../Components/Navbar";
import { BookList } from "../Components/BookList";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <BookList />
    </div>
  );
};
