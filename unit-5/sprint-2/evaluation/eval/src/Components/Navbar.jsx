import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link data-testid="home-page-link" to={"/"}>
        Home
      </Link>
      <h2>React - Redux - Restaurant - Display - App</h2>
      <Link data-testid="login-page-link" to={"/login"}>
        Login
      </Link>
      
    </div>
  );
};

export default Navbar;
