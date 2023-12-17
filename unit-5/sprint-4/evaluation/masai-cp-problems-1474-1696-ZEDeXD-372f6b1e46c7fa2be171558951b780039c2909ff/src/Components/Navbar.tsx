import React from "react";

export const Navbar = () => {
  return (
    <div>
      <h2>Library Management</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-book-link" href="/add-book">
        Add New Book
      </a>
      <h3 data-testid="page-name">Display Proper page name here</h3>
    </div>
  );
};
