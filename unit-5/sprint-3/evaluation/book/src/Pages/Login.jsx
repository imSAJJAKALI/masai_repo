import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const {isAuth}=useSelector((store)=>store.authReducer)
  const dispatch=useDispatch()
  const store=useSelector((store)=>store)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate()
const location =useLocation()

console.log(location)
useEffect(()=>{

  if(isAuth){
    navigate(location.state)
  }
},[isAuth])


const handleLogin=()=>{

  
    let user={
      email,password
    }
    dispatch(login(user))
    

}


  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login"
      onClick={handleLogin}
      >Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
