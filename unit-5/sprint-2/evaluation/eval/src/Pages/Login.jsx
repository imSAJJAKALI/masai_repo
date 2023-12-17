import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Authentication/action";

export const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch=useDispatch()
const authRed=useSelector((store)=>store.authReducer)


const handleLogin=()=>{
  let payload={
    email,password
  }
dispatch(login(payload))

}

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
    </div>
  );
};
