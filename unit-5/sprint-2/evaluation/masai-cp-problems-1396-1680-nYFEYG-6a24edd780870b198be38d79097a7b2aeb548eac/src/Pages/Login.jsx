import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { loginFail, loginReq, loginSuc } from "../Redux/Authentication/action";

export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPass]=useState('')

  const loginToken=useSelector((store)=>store.authReducer.token)
  const dispatch=useDispatch()
  console.log(loginToken)
  
  const handleLogin=()=>{
    const details={
      email,password
    }
    dispatch(loginReq())
   fetch(`https://reqres.in/api/login`,{
    method:"POST",
    body:JSON.stringify(details),
    headers:{
      "Content-Type":"application/json"
    }
   }).then((res)=>res.json()).then((act)=> dispatch(loginSuc(act.token)))
   .catch(()=>dispatch(loginFail()))
    
  }
  
  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPass(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
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
