import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/authentication/action'
import { styled } from 'styled-components'

const Login = () => {
const dispatch=useDispatch()
const auth=useSelector((store)=>store.authReducer)
console.log(auth)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleLogin=()=>{
    let userDetails={
        email,password
    }
    dispatch(login(userDetails))
}

  return (
    <>
    <h1>Login-Page</h1>
    <DIV>
        <div className='login'>

        <label htmlFor="">*Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="">*Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        </div>
    </DIV>
    </>
  )
}

export default Login

const DIV=styled.div`
display:flex;
justify-content:center;
.login{
  margin:10px;
  background-color:teal;
  border: 1px solid gray;
  padding:20px;
  display:flex;
  flex-direction:column;
  align-items:baseline;
}

`
