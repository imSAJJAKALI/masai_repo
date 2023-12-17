import { Box, Button, Flex, Input, Text, useStepContext } from '@chakra-ui/react';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/authReducer/action';

const Login = () => {
  const {isAuth}=useSelector((store)=>store.reducer)
  const dispatch=useDispatch()
  const [data,setData]=useState([])
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
console.log(isAuth)

const getDatas=()=>{
  axios.get('https://mock4server-m02k.onrender.com/users')
  .then((res)=>setData(res.data))
}

useEffect(()=>{
  getDatas()
},[])

const handleLogin=()=>{
for(let i=0; i<data.length; i++){
  if(data[i].email ==email && data[i].password==password){
    console.log('success')
    alert('Login Successfully ')
    setEmail('')
    setPassword('')
   dispatch(getData())
  }
}
 
}


  return (
    <div>
        <Text textAlign={"center"} fontSize={'30px'}>User Login</Text>
      <Flex justifyContent={"center"} mt={"5"}>
       <Box w={"200px"}>
        <Input value={email} placeholder='Enter email ...' onChange={(e)=>setEmail(e.target.value)} />
        <Input value={password} placeholder='Enter password ...' onChange={(e)=>setPassword(e.target.value)} />
        <Button onClick={()=>handleLogin()} >Login</Button>
       </Box>
      </Flex>
    </div>
  )
}

export default Login;