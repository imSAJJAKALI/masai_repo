import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <h2>Football Match</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/watch-list"}>Watch-List</Link>
      <Link to={"/login"}>Login</Link>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
`;
